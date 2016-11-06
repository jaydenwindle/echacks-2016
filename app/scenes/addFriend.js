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
    InputGroup,
    Input
} from 'native-base';

import { styles } from '../styles';

export class AddFriend extends Component {
    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Header style={styles.header}>
                    <Title>ROOTED: Explorer</Title>
                </Header>
                <Content style={styles.con}>
                    <InputGroup borderType="regular" style={{marginBottom: 20}}>
                        <Input placeholder="Name"/>
                    </InputGroup>
                    <InputGroup borderType="regular" style={{marginBottom: 20}}>
                        <Input placeholder="Phone #"/>
                    </InputGroup>
                    <InputGroup borderType="regular" style={{marginBottom: 20}}>
                        <Input placeholder="Email"/>
                    </InputGroup>
                    <Button 
                      block 
                      style={styles.btnPrimary}
                      onPress={() => this.props.navigator.popToTop()}>
                        Go To Trail Map
                    </Button>
                </Content>
            </Container>
        );
    }
}
