module.exports = {
  bumpFiles: [
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo/android/code'),
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo/ios/code'),
    }
  ]
};