import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PostAds(props) {

  return (
      <View style={styles.container}>
          <Text>This is PostAds</Text>
          <Button title='Go to Profile' onPress={()=>props.navigation.navigate('Profile')}>Go to Profile</Button>
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
