import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Ads() {

  return (
      <View style={styles.container}>
          <Text>This is Ads</Text>
          {/* <Button onPress={()=>props.navigaiton.navigate('Home')}>Go to Home</Button> */}
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
