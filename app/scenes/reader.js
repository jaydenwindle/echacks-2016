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
    Icon
} from 'native-base';

import { styles } from '../styles';


export class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapter: this.props.chapter,
            section1: {
                title: this.props.book.chapters[this.props.chapter][0].title,
                type: this.props.book.chapters[this.props.chapter][0].type,
                text: this.props.book.chapters[this.props.chapter][0].text,
            },
            section2: {
                title: this.props.book.chapters[this.props.chapter][1].title,
                type: this.props.book.chapters[this.props.chapter][1].type,
                text: this.props.book.chapters[this.props.chapter][1].text,
            }
        }
    }
    render() {
        console.log(this.state);
        return (
            <Container> 
                <Header style={styles.header}>
                    <Button onPress={() => this._navigate()} transparent>
                        <Icon name="md-arrow-back" />
                    </Button>
                    <Title>ROOTED</Title>
                </Header>

                <Content>
                    <Tabs>
                        <Content
                            style={styles.con} 
                            tabLabel={this.state.section1.title}>
                            <Text>
                                {this.state.section1.text}
                            </Text>
                        </Content>
                        <Content 
                            style={styles.con}
                            tabLabel={this.state.section2.title}>
                            <Text>
                                {this.state.section2.text}
                            </Text>
                        </Content>
                    </Tabs>
                    <Button 
                        block
                        onPress={() => this._next()}
                        style={{margin: 20}}>Next</Button>
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
