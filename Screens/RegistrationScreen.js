import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { globalStyles } from "../assets/styles/styles";
import { InputField } from "../components/InputField";

const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      email: "",
      password: "",
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/background.jpeg")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <Text style={globalStyles.headTitle}>Реєстрація</Text>
            <View style={{ gap: 16, width: "100%" }}>
              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, onFocus, value, name },
                }) => (
                  <InputField
                    // style={[
                    //   globalStyles.inputField,
                    //   isFocused === name && globalStyles.inputFocused,
                    // ]}
                    name={name}
                    placeholder="Логін"
                    onBlur={() => setIsFocused("")}
                    onFocus={() => setIsFocused(`${name}`)}
                    onChangeText={onChange}
                    value={value}
                    isFocused={isFocused}
                  />
                )}
                name="login"
                rules={{ required: true }}
              />
              {errors.login && <Text>Поле "Логін" обов'язкове</Text>}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <InputField
                    // style={[
                    //   globalStyles.inputField,
                    //   isFocused === name && globalStyles.inputFocused,
                    // ]}
                    keyboardType="email-address"
                    placeholder="Адреса електронної пошти"
                    onBlur={() => setIsFocused("")}
                    onFocus={() => setIsFocused(`${name}`)}
                    onChangeText={onChange}
                    value={value}
                    isFocused={isFocused}
                    name={name}
                  />
                )}
                name="email"
                rules={{ required: true }}
              />
              {errors.email && (
                <Text>Введіть коректну адресу єлектронної пошти</Text>
              )}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                    <InputField
                      // style={{ fontSize: 16, width: "70%" }}
                      placeholder="Пароль"
                      onBlur={() => setIsFocused("")}
                      onFocus={() => setIsFocused(`${name}`)}
                      onChangeText={onChange}
                      value={value}
                      isFocused={isFocused}
                      name={name}
                      isPasswordVisible={isPasswordVisible}
                      togglePasswordVisibility={togglePasswordVisibility}
                      // secureTextEntry={!isPasswordVisible}
                    />
                )}
                name="password"
                rules={{ required: true }}
              />
              {errors.password && <Text>Поле "Пароль" обов'язкове</Text>}
            </View>

            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={globalStyles.mainButton}
            >
              <Text>Зареєстуватися</Text>
            </TouchableOpacity>
            <View style={globalStyles.avatarContainer} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;
