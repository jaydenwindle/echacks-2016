/**
 * RootedApp
 * https://github.com/jaydenwindle/echacks-2016 
 * Created by @jaydenwindle
 */

// Base imports
import React, { Component } from 'react';
import { Navigator, Text, BackAndroid } from 'react-native';
import { Container } from 'native-base';
import Drawer from 'react-native-drawer'

// app assets
import { styles } from './styles';
import { Contents } from './scenes/contents.js';
import { Reader } from './scenes/reader.js';
import { OnBoard } from './scenes/onboard.js';
import { OnBoardExplorer } from './scenes/onboardExplorer.js';
import { AddFriend } from './scenes/addFriend.js';
var book = require('../assets/rooted.json');;

import store from 'react-native-simple-store';

var loggedIn = false;
var navigator;

export default class rootedapp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        store.get('user')
            .then(user => {
                this.setState({loggedIn: true});
            });
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }
    render() {
        if (this.state.loggedIn) {
            return (
                <Navigator
                    style={{ flex:1 }}
                    initialRoute={{ name: 'Contents' }}
                    renderScene={ this.renderScene }
                    ref={(nav) => { navigator = nav; }}/>
            );
        } else {
            return (
                <Navigator
                    style={{ flex:1 }}
                    initialRoute={{ name: 'OnBoard' }}
                    renderScene={ this.renderScene }
                    ref={(nav) => { navigator = nav; }}/>
            );
        }
    }
    renderScene(route, navigator) {
        switch (route.name) {
            case 'OnBoard':
                return <OnBoard navigator={navigator} book={book} />

            case 'OnBoardExplorer':
                return <OnBoardExplorer navigator={navigator} book={book} />

            case 'OnBoardGuide':
                return <OnBoardGuide navigator={navigator} book={book} />

            case 'AddFriend':
                return <AddFriend navigator={navigator} book={book} />

            case 'Contents':
                return <Contents navigator={navigator} book={book}/>

            case 'Reader':
                return <Reader navigator={navigator} book={book} chapter={route.index} />
        }
    }
}

