
<div>
  <br>
  <img src="./docs/resources/logo.png" height="360px" />
  <br>
</div>

# ProjectName

[![Bitrise](https://img.shields.io/bitrise/replace_me/master.svg?token=replace_me)](https://app.bitrise.io/app/replace_me)
[![StandardJS](https://img.shields.io/badge/code%20style-100%25%20standard-F2DE56.svg)](https://standardjs.com/) [![React Native](https://img.shields.io/badge/react--native-v0.60.0-green.svg)](https://github.com/facebook/react-native)

[![Google Play Store](https://img.shields.io/badge/Google-Play%20Store%20(API%20level%2021+)-D1436C.svg)](https://play.google.com/store/apps/details?id=nl.efteling.android&hl=nl)
[![Apple App Store](https://img.shields.io/badge/Apple-App%20Store%20(iOS%209+)-2DA2F4.svg)](https://itunes.apple.com/nl/app/efteling/id727498391?mt=8)


A short description about the app and what is does.

## Getting started

Please see the [installation guide](./docs/installation.md) on how to install the required tooling on your machine. After you have installed the tooling you can run:

```bash
git clone git@github.com:company/projectname.git && cd projectname && yarn install
```
The Android dependencies will be installed by Gradle when build from the terminal or trough Android Studio. For iOS we use CocoaPods, go ahead and install the ios dependencies by running:
```bash
cd ios && bundle exec pod install
```
_note: you should run pod install AFTER installing node dependencies with yarn install._


### Running the app

Now you are good to go. Just open `ios/ProjectName.xcworkspace` in Xcode or import the `android` folder in Android Studio. Make sure that the react-native packager is running `yarn start` from the root of the project.


### More resources

Some useful tips can be found in our [react-native-learnings](https://github.com/Redhotminute/react-native-learnings) repository. If you are having troubes? Be sure to checkout the [troubleshouting section](https://github.com/Redhotminute/react-native-learnings/blob/master/troubleshooting.md).

A list of usefull learning resources to learn about several topics related to react-native app development can be found in [learning section](https://github.com/Redhotminute/react-native-learnings/blob/master/learning-resources.md).
