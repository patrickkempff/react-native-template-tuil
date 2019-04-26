module.exports = {
  extends: [ 'tuil' ],
  // Because we are linting a typescript project make sure eslint
  // does parse the our typescript files.
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Make sure we use the same config for the parse that we use with the typescript compiler.
    project: './tsconfig.json'
  },
  settings: {
    react: {
        version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  globals: {
    '__DEV__': true
  }
}
