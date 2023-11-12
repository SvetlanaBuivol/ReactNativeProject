import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import PlusIcon from "../assets/svgs/Svgs/PlusIcon";
import ProfileScreen from "../Screens/ProfileScreen";
import UserIcon from "../assets/svgs/Svgs/UserIcon";
import GridIcon from "../assets/svgs/Svgs/GridIcon";
import PostsScreen from "../Screens/PostsScreen";
import headerOptions from "../helpers/headerOptions/headerOptions";
import { globalStyles } from "../assets/styles/styles";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

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
        options={{
          tabBarIcon: ({ color, size }) => (
            <GridIcon name="home" color={color} size={size} />
          ),
          ...headerOptions({ navigation, title: "Публікації" }),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={globalStyles.tabButton}>
              <PlusIcon name="add" color={color} size={size} />
            </View>
          ),
          ...headerOptions({ navigation, title: "Створити публікацію" }),
        }}
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
