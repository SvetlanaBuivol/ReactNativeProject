import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { useSelector } from "react-redux";
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserId,
  selectUserName,
} from "../redux/auth/authSelectors";
import unknownPerson from "../assets/images/unknownPerson.jpg";
import { fetchUserPosts } from "../redux/posts/fetchPosts";
import PostCard from "../components/PostCard";
import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const PostsScreen = () => {
  const avatar = useSelector(selectUserAvatar);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
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
    <View style={globalStyles.mainContainer}>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        {avatar ? (
          <Image
            source={{ uri: avatar }}
            style={globalStyles.postsUserCardImg}
          />
        ) : (
          <View style={{ width: 60, height: 60, borderRadius: 16 }}>
            <Image
              source={unknownPerson}
              style={globalStyles.postsUserCardImg}
            />
          </View>
        )}

        <View>
          <Text style={globalStyles.userNameCard}>{userName}</Text>
          <Text style={globalStyles.userEmailCard}>{userEmail}</Text>
        </View>
      </View>
      <View>
        <ScrollView style={{ marginBottom: 32 }}>
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PostsScreen;
