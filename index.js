/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as TaskManager from 'expo-task-manager';

TaskManager.defineTask('getPosition', (data, error) => {
  if(error)
    return;
  console.log(data.locations);
});

AppRegistry.registerComponent(appName, () => App);
