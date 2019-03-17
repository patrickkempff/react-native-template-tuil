const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

if (fs.existsSync(path.join(__dirname, '.npmignore'))) {
  process.exit()
}


const packageJson = require('./package.json')
const standardConfig = require('./standard.json')
const app = require('./app.json')

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName))
const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data)
const makeDir = (dir, data) => !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true })
const writeDir = (dirname, fileName, data) => { makeDir(path.join(__dirname, dirname)); writeFile(path.join(dirname, fileName), data) }
const deleteDir = dir => fs.rmdirSync(path.join(__dirname, dir))

const replaceContent = (fileName, charset, searchValue, replaceValue) => {
  const content = fs.readFileSync(path.join(__dirname, fileName), charset).replace(searchValue, replaceValue)
  writeFile(fileName, content)
}

replaceContent(`ios/${app.name}/AppDelegate.m`, 'utf8', `jsBundleURLForBundleRoot:@"index"`, `jsBundleURLForBundleRoot:@"src/index"`)
replaceContent(`android/app/src/main/java/com/${app.name.toLowerCase()}/MainApplication.java`, 'utf8', `"index"`, `"src/index"`)

console.log('🔄 Setting up...')

packageJson.scripts.lint = 'standard **/*.{ts,tsx,js,jsx} | yarn snazzy && yarn tsc'
packageJson.standard = Object.assign({}, packageJson.standard, standardConfig)

writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('.flowconfig')
// deleteFile('.travis.yml')
deleteFile('App.js')
deleteFile('__tests__/App-test.js')
deleteDir('__tests__')

deleteFile('standard.json')
deleteFile('index.js')
deleteFile('LICENSE')
// deleteFile('CODE_OF_CONDUCT.md')
// deleteFile('CONTRIBUTING.md')
// deleteFile('ISSUE_TEMPLATE.md')
deleteFile('README.md')
// deleteFile('package-lock.json')
deleteFile('.buckconfig')
// deleteFile('.npmignore')
deleteFile('setup.js')

console.log(`🔨Fixing StandardJS compliance...`)

execSync('yarn standard **/*.{ts,tsx,js,jsx} --fix', {stdio: 'inherit'})

console.log(`💿 Running typescript verifier`)

execSync('yarn tsc', {stdio: 'inherit'})

console.log(`✅ Setup completed!`)


