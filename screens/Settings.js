import * as Font from 'expo-font';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

export default class Settings extends Component {
    // static navigationOptions = {
    //   header: null
    // }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>This is Settings</Text>
                <Button title='Log Out' onPress={() => this.props.navigation.navigate('Login')} />
            </View>
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
    heading: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 24,
        color: '#39325c',
        textAlign: 'center',
        // fontFamily: 'Muli-Bold',
    },
});
