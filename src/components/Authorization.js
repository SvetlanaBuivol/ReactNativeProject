import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../assets/styles/styles";

export const Authorization = ({
  onSubmit,
  buttonText,
  authLink,
  authText,
  onPress,
}) => {
  return (
    <View style={{ gap: 16, marginTop: 43, width: "100%" }}>
      <TouchableOpacity onPress={onSubmit} style={globalStyles.mainButton}>
        <Text style={[globalStyles.mainText, { color: "#FFFFFF" }]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={[globalStyles.mainText, { color: "#1B4371" }]}>
          {authText}{" "}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[globalStyles.mainText, { color: "#1B4371" }]}>
            {authLink}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
