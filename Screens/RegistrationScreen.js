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

const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <Text style={globalStyles.headTitle}>Реєстрація</Text>
            <View style={{ gap: 16, width: "100%" }}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={globalStyles.inputField}
                    placeholder="Логін"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="login"
                rules={{ required: true }}
              />
              {errors.login && <Text>Поле "Логін" обов'язкове</Text>}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={globalStyles.inputField}
                    placeholder="Адреса електронної пошти"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
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
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    style={[
                      globalStyles.inputField,
                      { flexDirection: "row", justifyContent: "space-between" },
                    ]}
                  >
                    <TextInput
                      style={{ fontSize: 16 }}
                      placeholder="Пароль"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                      <Text style={{ fontSize: 16 }}>
                        {isPasswordVisible ? "Приховати" : "Показати"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                name="password"
                rules={{ required: true }}
              />
              {errors.password && <Text>Поле "Пароль" обов'язкове</Text>}
            </View>

            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={{ minWidth: "17%" }}
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
