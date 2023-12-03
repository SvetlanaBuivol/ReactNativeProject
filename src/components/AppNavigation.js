import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import MapScreen from "../Screens/MapScreen";
import Home from "../Screens/Home";

const MainStack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
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
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        {/* <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={({ navigation }) =>
            headerOptions({ navigation, title: "Публікації" })
          }
        /> */}
        {/* <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) =>
            headerOptions({ navigation, title: "Коментарі" })
          }
        /> */}
        {/* <MainStack.Screen
          name="CreatePost"
          component={CreatePostsScreen}
          options={({ navigation }) =>
            headerOptions({ navigation, title: "Створити публікацію" })
          }
        /> */}
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    )
}

export default AppNavigation;