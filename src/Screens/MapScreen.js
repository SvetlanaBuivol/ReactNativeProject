import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
} from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
    return (
    <View style={{flex: 1}}>
            <MapView style={StyleSheet.absoluteFill}
                provider='google'
                showsUserLocation
                showsMyLocationButton
            />
    </View>
  );
};

export default MapScreen;
