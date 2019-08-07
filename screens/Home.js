import * as Font from 'expo-font';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

export default class Home extends Component {
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home</Text>
        <Button title='Go to Profile' onPress={() => this.props.navigation.navigate('Profile')}>Go to Profile</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
