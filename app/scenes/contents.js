import React, { Component, } from 'react';
import {
    Text,
    View,
    Image,
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

export class Contents extends Component {
    render() {
        var chapterNum = 0;
        return (
            <Container> 
                <Header style={styles.header}>
                    <Title>ROOTED</Title>
                    <Button transparent style={{justifySelf: "flex-end"}}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content style={styles.con}>
                    <List 
                        dataArray={this.props.book.chapters}
                        renderRow={(chapter) =>
                            <ListItem style={{marginLeft: 0, marginBottom: -5}}>
                                <Button transparent
                                  onPress={() => this._navigate()}>
                                    <Icon name="md-checkmark" style={styles.checkcircle_icon}/>    
                                    <Text>{chapter[0].title}</Text>
                                </Button>
                            </ListItem>
                        }>
                    </List> 
                </Content>
            </Container>
           );
    }
    _navigate() {
        this.props.navigator.push({name: "Reader"});
    }
}
