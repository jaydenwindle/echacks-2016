import React, { Component, } from 'react';
import Drawer from 'react-native-drawer'
import {
    Text,
    View,
    Image,
    Navigator,
    ScrollView,
    Alert
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

export class OnBoardExplorer extends Component {
    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Header style={styles.header}>
                    <Title>ROOTED: Explorer</Title>
                </Header>
                <Content style={styles.con}>
                    <Text style={{marginBottom: 20}}>Welcome to the Rooted Explorer app!</Text>
                    <Text style={{marginBottom: 20}}>Whether you are exploring Christian 
                    teachings for the first time or a seasoned 
                    traveler in the faith, we hope that we can 
                    help you grow in your understanding of the 
                    Christian faith.</Text>
                    <Text style={{marginBottom: 20}}>To get the most out of your Rooted 
                    experience, we suggest that you journey 
                    alongside a FRIEND who will with you 
                    through the process). Do you have a 
                    FRIEND that will help guide you?</Text>
                    <Button 
                      block 
                      style={styles.btnPrimary}
                      onPress={() => this.props.navigator.push({name: 'AddFriend'})}>
                        Add a FRIEND
                    </Button>
                    <Button 
                      block 
                      style={styles.btnPrimary}
                      onPress={() => {
                        this.props.navigator.replacePrevious({name: 'Contents'});
                        this.props.navigator.pop();
                      }}>
                        Go To Trail Map
                    </Button>
                </Content>
            </Container>
        );
    }
}
