import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import MapScreen from "../Screens/MapScreen";
import Home from "../Screens/Home";
import CommentsScreen from "../Screens/CommentsScreen";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/auth/authSelectors";
import headerOptions from "../helpers/headerOptions/headerOptions";
import { globalStyles } from "../assets/styles/styles";
import { TouchableOpacity } from "react-native";
import LeftIcon from "../assets/svgs/Svgs/LeftIcon";

const MainStack = createStackNavigator();

const AppNavigation = () => {
  // const navigation = useNavigation()
  const isAuth = useSelector(selectIsAuth)
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={isAuth ? 'Home' : "Registration"}>
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
          options={{ headerShown: true }}
        />
        {/* <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={({ navigation }) =>
            headerOptions({ navigation, title: "Публікації" })
          }
        /> */}
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          // options={({ navigation }) =>
          //   headerOptions({ navigation, title: "Коментарі" })
          // }
          options={({navigation}) => ({ 
            title: 'Комментарі',
            ...globalStyles.subTitle,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Posts')} style={{ marginLeft: 16 }}>
                <LeftIcon/>
              </TouchableOpacity>
            )
           })}
        />
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
  );
};

export default AppNavigation;
