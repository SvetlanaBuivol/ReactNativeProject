import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import UserIcon from '../components/Svgs/UserIcon';
import GridIcon from '../components/Svgs/GridIcon';
import PlusIcon from '../components/Svgs/PlusIcon';

const Tab = createBottomTabNavigator();

const PostsScreen = () => {
    return (
        <View >
            <Text>Posts</Text>
            <Tab.Navigator>
                {/* <Tab.Screen
                    name="Posts"
                    component={PostsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                           <GridIcon name='home' color={color} size={size}/>
                        ),
                    }}
                /> */}
                <Tab.Screen
                    name="CreatePosts"
                    component={CreatePostsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                           <PlusIcon name='add' color={color} size={size}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                           <UserIcon name='person' color={color} size={size}/>
                        ),
                    }}
                />
             </Tab.Navigator>
        </View>
    );
};

export default PostsScreen;