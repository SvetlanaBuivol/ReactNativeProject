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
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../redux/auth/authOperations";

const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      email: "",
      password: "",
    },
  });

  const [isFocused, setIsFocused] = useState(null);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    try {
       await dispatch(registerUserAsync({
        login: data.login,
        email: data.email,
        password: data.password,
      }))
    } catch (error) {
      console.log(error)
    }
    // console.log(data.email);
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
                onPress={() => navigation.navigate("Login")}
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
