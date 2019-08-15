import * as Font from 'expo-font';
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEmail: '',
      textPassword: '',
      fontLoaded: false,
    };
  }
  // static navigationOptions = {
  //   header: null
  // }
  async componentDidMount() {
    await Font.loadAsync({
      'Muli-Regular': require('../assets/fonts/Muli-Regular.ttf'),
      'Muli-Bold': require('../assets/fonts/Muli-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }
  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{
              height: 100,
              width: 100,
            }}
          />
          <Text style={styles.appTitle}>Welcome to Connecting</Text>
          <Text style={styles.introText}>Free messages to another users and make messaging fun with audios &amp; videos!</Text>
          <View style={styles.inputFieldBg}>
            <TextInput
              style={{
                height: 45,
                paddingLeft: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}
              keyboardType={'email-address'}
              autoCompleteType={'email'}
              autoCorrect={false}
              onChangeText={(textEmail) => this.setState({ textEmail })}
              value={this.state.textEmail}
              placeholder={'Email'}
            />
            <TextInput
              style={{
                height: 45,
                paddingLeft: 15,
              }}
              secureTextEntry={true}
              autoCompleteType={'off'}
              autoCorrect={false}
              onChangeText={(textPassword) => this.setState({ textPassword })}
              value={this.state.textPassword}
              placeholder={'Password'}
            />
          </View>
          <TouchableOpacity
            style={styles.LoginBtn}
            onPress={() => this.props.navigation.navigate('MainScreen')}
          >
            <Text style={{ color: "#fff" }}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.otherText}>
            Don't have an account? <Text style={{ color: '#007aff' }} onPress={() => this.props.navigation.navigate('Register')}>Sign up</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}
          >
            <TouchableOpacity style={{ marginRight: 10, }} >
              <Image
                source={require('../assets/images/facebook.png')}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/twitter.png')}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>

          </View>
        </View>) : (<View style={styles.container}><ActivityIndicator color="#007aff" size="large" /></View>)
    );
  }

}

// #6c757d Secondary
// #007aff Sky Blue 
// #f8f9fa Light
// #39325c Dark purple

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 32,
    color: '#39325c',
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
  },
  introText: {
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Muli-Regular',
    color: '#bdc6d0',
  },
  inputFieldBg: {
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#fff',
    fontFamily: 'Muli-Regular',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  LoginBtn: {
    width: '80%',
    paddingVertical: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: '#007aff',
    fontFamily: 'Muli-Regular',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  otherText: {
    fontFamily: 'Muli-Regular',
    color: '#39325c',
    margin: 10,
  }
});
