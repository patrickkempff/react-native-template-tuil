/**
 * This file in the entrypoint of react-native. All executed code
 * will be running trough this file. The entrypoint for metro should be
 * a .js file, all other files can be written in typescript (.ts/.tsx)
 */

import { AppRegistry } from 'react-native'
import Root from './app/root'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Root)
