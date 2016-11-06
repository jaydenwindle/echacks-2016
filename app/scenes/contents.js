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

import { Menu } from '../components/menu';

import { styles } from '../styles';

import store from 'react-native-simple-store';

export class Contents extends Component {
    closeControlPanel() {
        this._drawer.close()
    }
    openControlPanel() {
        this._drawer.open()
    }
    render() {
        return (
            <Drawer
              ref={(ref) => this._drawer = ref}
              type="displace"
              content={<Menu />}
              tapToClose={true}
              openDrawerOffset={0.3}
              >
                <Container style={styles.container}> 
                    <Header style={styles.header}>
                        <Title>ROOTED</Title>
                        <Button 
                          transparent 
                          style={{justifySelf: "flex-end"}}
                          onPress={() => this.openControlPanel()}>
                            <Icon name='ios-menu' />
                        </Button>
                    </Header>

                    <Content style={styles.con}>
                        <List
                          dataArray={this.props.book.chapters}
                          renderRow={(chapter) => this.renderChapter(chapter)}></List>
                    </Content>
                </Container>
            </Drawer> 
           );
    }
    renderChapter(chapter) {
        console.log();
        return (
            <ListItem style={{marginLeft: 0, marginBottom: -5}}>
                <Button transparent
                  onPress={() => this._navigate(this.props.book.chapters.indexOf(chapter))}>
                    <Icon 
                      name="md-checkmark" 
                      style={[styles.checkcircle_icon, styles.checkcircle_done]}/>    
                    {chapter[0] !== undefined ? <Text>{chapter[0].title}</Text> : <Text />}
                    {chapter[1] !== undefined ? <Text>{chapter[1].title}</Text> : <Text />}
                </Button>
            </ListItem>
        );
    }
    _navigate(index) {
        this.props.navigator.push({name: "Reader", index: index});
    }
}
