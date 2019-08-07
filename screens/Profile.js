import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login(props) {
  return (
      <View style={styles.container}>
          <Text>This is Profile</Text>
          <Button title='Log Out' onPress={()=>props.navigation.navigate('Login')}>Log Out</Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
