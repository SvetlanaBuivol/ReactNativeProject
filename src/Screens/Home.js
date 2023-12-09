import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import PlusIcon from "../assets/svgs/Svgs/PlusIcon";
import ProfileScreen from "../Screens/ProfileScreen";
import UserIcon from "../assets/svgs/Svgs/UserIcon";
import GridIcon from "../assets/svgs/Svgs/GridIcon";
import PostsScreen from "../Screens/PostsScreen";
import { globalStyles } from "../assets/styles/styles";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import LeftIcon from "../assets/svgs/Svgs/LeftIcon";
import LogOutIcon from "../assets/svgs/Svgs/LogOutIcon";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../redux/auth/authOperations";

const Tab = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
  // const isCreatePostsScreen =
  //   route.state?.routes[route.state.index]?.name === "CreatePosts";

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserAsync());
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 92, paddingHorizontal: "14%" },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <GridIcon name="home" color={color} size={size} />
          ),
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity
              onPress={handleLogout}
              style={{ marginRight: 16 }}
            >
              <LogOutIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <View style={globalStyles.tabButton}>
              <PlusIcon name="add" color={color} size={size} />
            </View>
          ),
          title: "Комментарі",
          ...globalStyles.subTitle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Posts")}
              style={{ marginLeft: 16 }}
            >
              <LeftIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon name="person" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
