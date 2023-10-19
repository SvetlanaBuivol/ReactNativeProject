import React from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import SvgAdd from "./Svgs/AddIcon";
import { globalStyles } from "../assets/styles/styles";

export const AvatarContainer = () => {
  return (
    <View style={globalStyles.avatarContainer}>
      <SvgAdd style={{ position: "absolute", top: 81, left: 107 }} />
    </View>
  );
};
