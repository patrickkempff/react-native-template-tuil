## Installation Requirements

#### Pre-requistes for iOS
* XCode 10.2.1
* Install [bundler](https://bundler.io/)

Bundler is used for managing pod versions.

<strong>Installing the App on iOS</strong>
1. Go to the iOS folder: `cd ios` and run `bundler exec pod install`.
2. Go one folder back and run: `yarn ios`

#### Pre-requistes for Android
* Android Studio 3.4.0+

<strong>Installing the app on Android</strong>

1. Make sure a device or emulator is running.
2. Start the JS bundler `yarn start`
3. Run `yarn android`

### Editor Config

We use an [editorconfig](../.editorconfig) file to apply a set of standard configuration options. This makes diffing in git easier, as well as sets up consistent formatting for your code across different operating systems.

Make sure your code editor has `editorconfig` enabled. Download a plugin for your editor [here](https://editorconfig.org/#download)

### ESLint For VSCode

VSCode extension to integrate ESLint into VSCode.

#### How to use

Follow the instructions of [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
