import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
     <MapView        
        style={{flex: 1}}  
        initialRegion={{ 
          latitude: 42.3505,
          longitude: -71.1054,
          latitudeDelta: 0.09,
          longitudeDelta: 0.06}}          
        showsUserLocation={true}     
      />  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
