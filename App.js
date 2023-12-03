import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
// import RegistrationScreen from "./src/Screens/RegistrationScreen";
// import LoginScreen from "./src/Screens/LoginScreen";
// import MapScreen from "./src/Screens/MapScreen";
// import ProfileScreen from "./src/Screens/ProfileScreen";
// import PostsScreen from "./src/Screens/PostsScreen";
// import CommentsScreen from "./src/Screens/CommentsScreen";
// import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
// import headerOptions from "./src/assets/headerOptions/headerOptions";
// import Home from "./src/Screens/Home";
import AppNavigation from "./src/components/AppNavigation";

// const MainStack = createStackNavigator();

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
    <AppNavigation/>
  );
}
