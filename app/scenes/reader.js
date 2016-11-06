import React, { Component, } from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Tabs,
    Button,
    Icon
} from 'native-base';

import { styles } from '../styles';


export class Reader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var obj = this.props.book.chapters[this.props.chapter];
        return (
            <Container> 
                <Header style={styles.header}>
                    <Button onPress={() => this._navigate()} transparent>
                        <Icon name="md-arrow-back" />
                    </Button>
                    <Title>ROOTED</Title>
                </Header>

                <Content>
                    {obj[1] !== undefined ? 
                    <Tabs>
                        <Content
                            style={styles.con} 
                            tabLabel={obj[0].title}>
                            <Text>
                                {obj[0].text}
                            </Text>
                        </Content>
                        <Content 
                            style={styles.con}
                            tabLabel={obj[1].title}>
                            <Text>
                                {obj[1].text}
                            </Text>
                        </Content>
                    </Tabs>
                    : 
                    <View style={styles.con}>
                        <Text style={[styles.h1, {textAlign: 'left'}]}>{obj[0].title}</Text>
                        <Text>
                            {obj[0].text}
                        </Text>
                    </View>}
                    <View style={styles.con}>
                        <Button 
                            block
                            onPress={() => this._next()}
                            >Next</Button>
                    </View>
                </Content>
            </Container>
           );
    }
    _navigate() {
        this.props.navigator.pop();
    }
    _next() {
        this.setState({
            chapter: this.state.chapter + 1,
            section1: {
                title: this.props.book.chapters[this.state.chapter + 1][0].title,
                type: this.props.book.chapters[this.state.chapter + 1][0].type,
                text: this.props.book.chapters[this.state.chapter + 1][0].text,
            },
            section2: {
                title: this.props.book.chapters[this.state.chapter + 1][1].title,
                type: this.props.book.chapters[this.state.chapter + 1][1].type,
                text: this.props.book.chapters[this.state.chapter + 1][1].text,
            }
        });
    }
}
