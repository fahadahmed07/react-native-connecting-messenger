import * as Font from 'expo-font';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

export default class CreateMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Muli-Regular': require('../assets/fonts/Muli-Regular.ttf'),
            'Muli-Bold': require('../assets/fonts/Muli-Bold.ttf'),
        });
        this.setState({ fontLoaded: true })
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params,
        headerStyle: {
            backgroundColor: '#113953',
            shadowOpacity: 0,
            elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Muli-Bold',
            fontWeight: "normal",
        }
    })
    render() {
        return (
            this.state.fontLoaded ? (
                <View style={styles.mainContainer}>
                    <View style={styles.listContainer}>
                        <View>
                            <Text style={styles.heading}>This is Create Messages</Text>
                            {/* <Button title='Create CreateMessages' onPress={() => this.props.navigation.navigate('CreateCreateMessages')} /> */}
                        </View>
                    </View>
                </View>
            ) : (<View style={styles.container}><ActivityIndicator color="#007aff" size="large" /></View>)
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#113953',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    heading: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 24,
        color: '#39325c',
        textAlign: 'center',
        fontFamily: 'Muli-Bold',
    },
});
