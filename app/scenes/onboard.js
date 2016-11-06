import React, { Component, } from 'react';
import Drawer from 'react-native-drawer'
import {
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    List,
    ListItem,
} from 'native-base';

import { styles } from '../styles';

import store from 'react-native-simple-store';

export class OnBoard extends Component {
    render() {
        return (
            <Container 
              style={{
                  flex: 1, 
                  alignItems: 'center', 
                  flexDirection: 'row', 
                  paddingTop: 100, 
                  backgroundColor: 'white'}}>
                <Content style={{backgroundColor: 'white', padding: 20}}>
                    <Text style={styles.h1}>ROOTED</Text>
                    <Button 
                      block
                      style={styles.btnPrimary}
                      onPress={() => this.addExplorer()}>
                        I am an EXPLORER
                    </Button>
                    <Button
                      block
                      style={styles.btnSecondary}
                      onPress={() => this.addGuide()}>
                        I am a GUIDE
                    </Button>
                    <Image 
                      source={require('../../assets/roots3.png')}
                      style={{width: 250, height: 200, marginBottom: 20, alignSelf: 'center'}} />
                </Content>
            </Container>
        );
    }
    addExplorer() {
        store.save('user', {
            userType: 'explorer',
            loggedIn: true
        }).then(() => {
            this.props.navigator.push({name: 'OnBoardExplorer'});
        });
    }
    addGuide() {
        store.save('user', {
            userType: 'guide',
            loggedIn: true
        }).then(() => {
            this.props.navigator.push({name: 'OnBoardGuide'});
        });
    }
}
