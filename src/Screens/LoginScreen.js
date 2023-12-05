import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { globalStyles } from "../assets/styles/styles";
import { Form } from "../components/Form";
import { Authorization } from "../components/Authorization";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../redux/auth/authOperations";

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isFocused, setIsFocused] = useState(null);

  const dispatch = useDispatch()
  const navigation = useNavigation();

  const onSubmit = async(data) => {
    try {
       await dispatch(loginUserAsync({
        email: data.email,
        password: data.password,
      }))
    } catch (error) {
      console.log(error)
    }
    reset();
    navigation.navigate("Home");
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
          <View
            style={[
              globalStyles.authContainer,
              { paddingBottom: isFocused ? 32 : 145, paddingTop: 32 },
            ]}
                  >
                      <Text style={globalStyles.headTitle}>Увійти</Text>
                       <Form
              control={control}
              errors={errors}
              fields={[ "email", "password"]}
              onBlur={() => setIsFocused(false)}
              onFocus={(field) => setIsFocused(field)}
              isFocused={isFocused}
                      />
                      {!isFocused && (
              <Authorization
                onSubmit={handleSubmit(onSubmit)}
                onPress={() => navigation.navigate("Registration")}
                buttonText={"Увійти"}
                authLink={"Зареєструватися"}
                authText={"Немає акаунту?"}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
