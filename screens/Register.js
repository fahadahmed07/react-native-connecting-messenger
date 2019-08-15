import * as Font from 'expo-font';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEmail: '',
      textPassword: '',
      textName: '',
      fontLoaded: false,
    };
  }
  // static navigationOptions = {
  //   title: 'Sign up',
  //   headerStyle: {
  //     backgroundColor: '#f8f9fa',
  //   },
  //   headerTintColor: '#39325c',
  //   // headerTitleStyle: {
  //   //   fontWeight: '900',
  //   // },
  // };
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
          <View style={styles.inputFieldBg}>
            <TextInput
              style={{
                height: 45,
                paddingLeft: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}
              onChangeText={(textName) => this.setState({ textName })}
              value={this.state.textName}
              placeholder={'Display name'}
            />
            <TextInput
              style={{
                height: 45,
                paddingLeft: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}
              keyboardType={'email-address'}
              autoCompleteType={'email'}
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
              onChangeText={(textPassword) => this.setState({ textPassword })}
              value={this.state.textPassword}
              placeholder={'Password'}
            />
          </View>
          <TouchableOpacity
            style={styles.SignupBtn}
            onPress={() => this.props.navigation.navigate('MainScreen')}
          >
            <Text style={{ color: "#fff" }}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.otherText}>
            Already have an account? <Text style={{ color: '#007aff' }} onPress={() => this.props.navigation.navigate('Login')}>Sign in</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
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
          <Text style={styles.tNPText}>
            I read and accept the Connecting <Text style={{ color: '#007aff' }}>Terms &amp; Policies</Text>
          </Text>
        </View>) : (<View style={styles.container}><ActivityIndicator size="large" /></View>)
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
  tNPText: {
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
  SignupBtn: {
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
