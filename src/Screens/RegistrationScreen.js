import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm } from "react-hook-form";
import { globalStyles } from "../assets/styles/styles";
import { Form } from "../components/Form";
import { AvatarContainer } from "../components/AvatarContainer";
import { Authorization } from "../components/Authorization";

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

  const [isFocused, setIsFocused] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../src/assets/images/background.jpeg")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[
              globalStyles.container,
              { paddingBottom: isFocused ? 32 : 78 },
            ]}
          >
            <Text style={globalStyles.headTitle}>Реєстрація</Text>
            <Form
              control={control}
              errors={errors}
              fields={["login", "email", "password"]}
              onBlur={() => setIsFocused(false)}
              onFocus={(field) => setIsFocused(field)}
              isFocused={isFocused}
            />
            {!isFocused && (
              <Authorization
                onSubmit={handleSubmit(onSubmit)}
                buttonText={"Зареєстуватися"}
                authLink={"Увійти"}
                authText={"Вже є акаунт?"}
              />
            )}
            <AvatarContainer />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;
