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
import { useForm } from "react-hook-form";
import { globalStyles } from "../assets/styles/styles";
import { Form } from "../components/Form";

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
            <Form
              control={control}
              errors={errors}
              onSubmit={handleSubmit(onSubmit)}
              fields={["login", "email", "password"]}
              buttonText={"Зареєстуватися"}
            />
            <View style={{flexDirection: 'row', marginTop: 16 }}>
              <Text
                style={[
                  globalStyles.mainText,
                  { color: "#1B4371", justifyContent: "center" },
                ]}
              >
                Вже є акаунт?{" "}
              </Text>
              <TouchableOpacity>
                <Text style={[globalStyles.mainText, { color: "#1B4371" }]}>
                  Увійти
                </Text>
              </TouchableOpacity>
            </View>
            <View style={globalStyles.avatarContainer} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;
