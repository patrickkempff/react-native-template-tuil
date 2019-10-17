module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx'
        ],
        root: ['./src'],
        // Make sure the alias list below correlates to
        // tsconfig.json -> compilerOptions -> paths
        alias: {
          '@domains': './src/domains',
          '@app': './src/app'
        }
      }
    ]
  ]
}
