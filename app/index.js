/**
 * RootedApp
 * https://github.com/facebook/react-native
 * @flow
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

