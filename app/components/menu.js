import React, { Component, } from 'react';
import {
    Text,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Tabs,
    Button,
    Icon,
    List,
    ListItem
} from 'native-base';

import { styles } from '../styles';

export class Menu extends Component {
    render() {
        return (
            <Container>
                <Content style={styles.menuContainer}> 
                    <List>
                        <ListItem>
                            <Button transparent>
                                <Text style={styles.menuItem}>Trail Map</Text>
                            </Button> 
                        </ListItem>
                        <ListItem>
                            <Button transparent>
                                <Text style={styles.menuItem}>Friends</Text>
                            </Button>   
                        </ListItem>
                        <ListItem>
                            <Button transparent>
                                <Text style={styles.menuItem}></Text>
                            </Button>   
                        </ListItem>
                    </List>     
                </Content>
            </Container>
        );
    }
}


