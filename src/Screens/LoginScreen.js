import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { globalStyles } from "../assets/styles/styles";
import { Form } from "../components/Form";
import { Authorization } from "../components/Authorization";

const LoginScreen = () => {
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

  const [isFocused, setIsFocused] = useState(null);

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
          <View
            style={[
              globalStyles.container,
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
