/**
 * RootedApp
 * https://github.com/jaydenwindle/echacks-2016 
 * Created by @jaydenwindle
 */

import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import { styles } from './styles';
import { Contents } from './scenes/contents.js';
import { Reader } from './scenes/reader.js';

var book = require('../assets/rooted.json');;



export default class rootedapp extends Component {
    render() {
        return (
            <Navigator
                style={{ flex:1 }}
                initialRoute={{ name: 'Contents' }}
                renderScene={ this.renderScene } />
           );
    }
    renderScene(route, navigator) {
        if (route.name == 'Contents') {
            return <Contents navigator={navigator} book={book}/>
        }
        if (route.name == 'Reader') {
            return <Reader navigator={navigator} book={book} chapter={1} />
        }
    }
}

