import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { postLocation, title } = route.params || {};

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider="google"
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: postLocation?.latitude,
          longitude: postLocation?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={postLocation} title={title} />
      </MapView>
    </View>
  );
};

export default MapScreen;
