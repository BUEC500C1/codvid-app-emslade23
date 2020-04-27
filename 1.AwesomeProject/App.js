/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const App: () => React$Node = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
      // Latitude and longitude are used to tell the position of the object
      // BU address 
      latitude: 42.3505,
      longitude: -71.1054,
      // latitudeDelta and longitudeDelta are used to 
      // provide the zoom options in the map.
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421}}
  />
  );
};

const styles = StyleSheet.create({



});

export default App;
