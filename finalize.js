const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const writeFile = (filePath, data) => {
  return fs.writeFileSync(filePath, data)
}

const deletePath = filePath => {
  if (!fs.existsSync(filePath)) {
    return
  }

  if (fs.lstatSync(filePath).isDirectory()) {
    fs.rmdirSync(filePath)
  } else {
    fs.unlinkSync(filePath)
  }
}

const projectRoot = __dirname

// Get the package.json because we need to remove the postinstall entry,
// otherwise this script would be called everytime the user installs
// something trough npm/yarn.
const packageJson = require(`${projectRoot}/package.json`)
packageJson.scripts.postinstall = undefined

writeFile(path.join(projectRoot, 'package.json'), JSON.stringify(packageJson, null, 2))

// Some files of the default template are not compliant to our editorconfig. So lets go ahead
// and run eclint fix, to make the files compliant to the settings in .editorconfig.
execSync(`cd ${projectRoot} && yarn eclint fix`, { stdio: 'inherit' })

// Run standard to make sure all the react-native official template files
// are compliant with standard or fix them if where possible.
execSync(`cd ${projectRoot} && yarn standard *.{ts,tsx,js,jsx} --fix`, { stdio: 'inherit' })

// Delete this script, and we are ready to go!
deletePath('finalize.js')
