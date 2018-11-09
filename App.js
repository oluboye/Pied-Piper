import React, {Component} from 'react';
const firebase = require('firebase')
// import styles from "./src/utils/styles";
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Main from "./src/pages/Main";
import Register from './src/pages/Register';
import Login from './src/pages/Login';

// import { Fonts } from './src/utils/Fonts';

import {
  Platform,
  ActivityIndicator,
  StatusBar
} from 'react-native';

export default class App extends Component {
 

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDbWrImDclPv2fnGd1_R4t3ge1gYhwqr7I',
      authDomain: 'pentracode-2018.firebaseapp.com'
    }

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Login: { screen: Login },
  Register: { screen: Register}
})
