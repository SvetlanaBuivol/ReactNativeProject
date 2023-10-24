import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import LogOutIcon from "./src/components/Svgs/LogOutIcon";
import { globalStyles } from "./src/assets/styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import LeftIcon from "./src/components/Svgs/LeftIcon";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Comments">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={({ navigation }) => ({
            title: "Публікації",
            ...globalStyles.subTitle,
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <LogOutIcon />
              </TouchableOpacity>
            ),
          })}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            title: "Коментарі",
            ...globalStyles.subTitle,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                <LeftIcon />
              </TouchableOpacity>
            ),
          })}
        />
        <MainStack.Screen
          name="CreatePost"
          component={CreatePostsScreen}
          options={({ navigation }) => ({
            title: "Створити публікацію",
            ...globalStyles.subTitle,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                <LeftIcon />
              </TouchableOpacity>
            ),
          })}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
