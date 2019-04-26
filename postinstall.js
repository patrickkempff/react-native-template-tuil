
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

//
//  ████████╗██╗   ██╗██╗██╗
//  ╚══██╔══╝██║   ██║██║██║
//     ██║   ██║   ██║██║██║
//     ██║   ██║   ██║██║██║
//     ██║   ╚██████╔╝██║███████╗
//     ╚═╝    ╚═════╝ ╚═╝╚══════╝
//

// we should only let it run when the actual template is being
// initialized when running react-native init. In this case
// .npmignore will not exist becsuse it is not published to npmjs.com.
if (fs.existsSync(path.join(__dirname, '.npmignore'))) {
  process.exit()
}

// This script is run from node_modules/react-native-template-tuil so we
// should go two directories up to get to the project root.
const projectRoot = path.join(__dirname, '..', '..')

// When publishing this package to npm we want to include the files listed below because
// npmjs.com / yarnpkg.com are using these files for their landing pages.
const templateFilesToDelete = ['README.md', 'LICENSE']
// Because we base this template on the official react-native version, there are
// some files we needed remove because we are supplying our own versions.
const projectFilesToDelete = ['.flowconfig', 'index.js', 'App.js', '__tests__/App-test.js', '__tests__']

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

const writeFile = (filePath, data) => {
  return fs.writeFileSync(filePath, data)
}

const replaceFileContents = (filePath, searchValue, replaceValue) => {
  writeFile(filePath, fs.readFileSync(filePath, 'utf8').replace(searchValue, replaceValue))
}

// Get the android and ios project dirs
const app = require(path.join(projectRoot, 'app.json'))

const iosAppDir = path.join(projectRoot, 'ios', app.name)
const androidAppDir = path.join(projectRoot, 'android', 'app')
const androidPackageDir = path.join(androidAppDir, 'src', 'main', 'java', 'com', app.name.toLowerCase())

// Modify the entry point to src/index instead of index.
replaceFileContents(path.join(iosAppDir, 'AppDelegate.m'), 'jsBundleURLForBundleRoot:@"index"', 'jsBundleURLForBundleRoot:@"src/index"')
replaceFileContents(path.join(androidPackageDir, 'MainApplication.java'), '"index"', '"src/index"')
replaceFileContents(path.join(androidAppDir, 'build.gradle'), 'entryFile: "index.js"', 'entryFile: "src/index.js"')

const packageJson = require(path.join(projectRoot, 'package.json'))

packageJson.scripts['codequality'] = 'yarn lint && yarn tsc'
packageJson.scripts['lint'] = 'yarn lint:editorconfig && yarn eslint --ext .ts,.js,.tsx,.jsx .'
packageJson.scripts['lint:editorconfig'] = 'yarn eclint check'
packageJson.scripts['lint:editorconfig:fix'] = 'yarn eclint fix'

// This is a a very ugly hack, but we are checking if jest is installed. If this is the case, we are at
// the end of the install procedure and we are ready to run standard --fix. This ensures the official
// react-native template files to be standard compliant. We will remove this postinstall hook after running it.
packageJson.scripts.postinstall = `[ -f node_modules/.bin/jest ] && node ${projectRoot}/finalize.js || echo 'skipping...'`

writeFile(path.join(projectRoot, 'package.json'), JSON.stringify(packageJson, null, 2))

// Lets delete unneeded files / directories
templateFilesToDelete.forEach(filePath => deletePath(path.join(__dirname, filePath)))
projectFilesToDelete.forEach(filePath => deletePath(path.join(projectRoot, filePath)))

// Remove this script.
deletePath('postinstall.js')
