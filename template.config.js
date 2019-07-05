console.log('\n\n')
console.log('CONFIG...')
console.log(__dirname)
console.log(process.cwd())
console.log(process.argv)
console.log('\n')

module.exports = {
  // Placeholder name that will be replaced in package.json, index.json, android/, ios/ for a project name.
  placeholderName: 'ProjectName',

  // Directory with the template which will be copied and processed by React Native CLI. Template directory should have package.json with all dependencies specified, including `react-native`.
  templateDir: './template',

  // Path to script, which will be executed after initialization process, but before installing all the dependencies specified in the template. This script runs as a shell script but you can change that (e.g. to Node) by using a shebang (see example custom template).
  postInitScript: './postinit.js',
};
