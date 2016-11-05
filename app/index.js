/**
 * RootedApp
 * https://github.com/jaydenwindle/echacks-2016 
 * Created by @jaydenwindle
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { styles } from './styles';

export default class rootedapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to RootedApp!
        </Text>
      </View>
    );
  }
}

