import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { View, Text } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { useSelector } from "react-redux";
import { selectUserId, selectUserName } from "../redux/auth/authSelectors";
import { AvatarContainer } from "../components/AvatarContainer";
import { ScrollView } from "react-native-gesture-handler";
import PostCard from "../components/PostCard";
import { useFocusEffect } from "@react-navigation/native";
import { fetchUserPosts } from "../redux/posts/fetchPosts";

const ProfileScreen = () => {
  const userName = useSelector(selectUserName);
  const userId = useSelector(selectUserId);
  const [userPosts, setUserPosts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const posts = await fetchUserPosts(userId);

          setUserPosts(posts);
        } catch (error) {
          console.error("Error fetching posts: ", error);
        }
      };
      fetchData();
    }, [])
  );

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: 150 }}
      source={require("../assets/images/background.jpeg")}
    >
      <View style={globalStyles.profileContainer}>
        <AvatarContainer />
        <Text>{userName}</Text>
        <View>
          <ScrollView style={{ marginBottom: 32 }}>
            {userPosts?.map((post) => (
                <PostCard key={post.id} post={post} likes={true} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
