import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import SvgAdd from "../assets/svgs/Svgs/AddIcon";
import { globalStyles } from "../assets/styles/styles";

export const AvatarContainer = ({openGallery, selectedImage}) => {

  return selectedImage ? (
    <View
      style={[globalStyles.avatarContainer, { backgroundColor: "transparent" }]}
    >
      <Image
        source={{ uri: selectedImage }}
        style={{ width: "100%", height: "100%", borderRadius: 16 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 81, left: 107 }}
        onPress={openGallery}
      >
        <SvgAdd />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={globalStyles.avatarContainer}>
      <TouchableOpacity
        style={{ position: "absolute", top: 81, left: 107 }}
        onPress={openGallery}
      >
        <SvgAdd />
      </TouchableOpacity>
    </View>
  );
};
