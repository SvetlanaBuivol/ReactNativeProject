import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { useForm } from "react-hook-form";
import { globalStyles } from "../assets/styles/styles";
import { Form } from "../components/Form";
import { AvatarContainer } from "../components/AvatarContainer";
import { Authorization } from "../components/Authorization";
import { useNavigation } from "@react-navigation/native";
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
   const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync()
    })();
  }, [])

  const openImagePickerAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const onSubmit = async (data) => {
    const result = await dispatch(
      registerUserAsync({
        login: data.login,
        email: data.email,
        password: data.password,
        avatar: selectedImage,
      })
    );
    if (result.type === "auth/registerUser/fulfilled") {
      navigation.navigate("Home");
      reset();
      setSelectedImage(null)
    } else {
      alert("Oops, something went wrong");
    }
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
            <AvatarContainer openGallery={openImagePickerAsync} selectedImage={selectedImage} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;
