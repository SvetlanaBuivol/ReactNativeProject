import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../assets/styles/styles";

export const InputField = ({
  isFocused,
  placeholder,
  value,
  name,
  onBlur,
  onFocus,
  onChangeText,
  keyboardType,
  isPasswordVisible,
  togglePasswordVisibility,
}) => {
  return (
    <View
      style={[
        globalStyles.inputField,
        isFocused === name && globalStyles.inputFocused,
        { flexDirection: "row", justifyContent: "space-between" },
      ]}
    >
      <TextInput
        style={[globalStyles.mainText, { flex: 1 }]}
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={onBlur}
        onFocus={() => onFocus(name)}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={name === "password" ? !isPasswordVisible : false}
      />
      {name === "password" ? (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={[globalStyles.mainText, { color: "#1B4371" }]}>
            {isPasswordVisible ? "Приховати" : "Показати"}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
