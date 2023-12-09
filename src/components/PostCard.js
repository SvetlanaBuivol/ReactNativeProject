import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import CommentsSvg from "../assets/svgs/Svgs/MessageIcon";
import MapIcon from "../assets/svgs/Svgs/MapIcon";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getComments } from "../redux/comments/getComments";
import LikeIcon from "../assets/svgs/Svgs/LikeIcon";
import { addLike } from "../redux/likes/addLike";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/auth/authSelectors";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config";

const PostCard = ({ post, likes }) => {
  const userId = useSelector(selectUserId);
  const [commentsCount, setCommentsCount] = useState([]);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    const postRef = doc(db, "posts", post.id);
    const unsubscribe = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const postData = doc.data();
        setLikesCount(postData.likes.length);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [post.id]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const comments = await getComments(post.id);

          setCommentsCount(comments);
        } catch (error) {
          console.error("Error fetching posts: ", error);
        }
      };
      fetchData();
    }, [])
  );

  const navigation = useNavigation();

  const handleMapPress = () => {
    navigation.navigate("MapScreen", {
      postLocation: post.location,
      title: post.locationName,
    });
  };

  const handleCommentsPress = () => {
    navigation.navigate("Comments", { photo: post.imageURL, postId: post.id });
  };

  const handleAddLike = async () => {
    try {
      await addLike({ postId: post.id, userId });
    } catch (error) {
      console.error("Error adding like: ", error);
    }
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <Image source={{ uri: post.imageURL }} style={globalStyles.cameraBox} />
      <Text style={globalStyles.postTitle}>{post.title}</Text>
      <View style={globalStyles.postDescr}>
        <TouchableOpacity
          onPress={handleCommentsPress}
          style={globalStyles.postCommentsBtn}
        >
          <CommentsSvg color={likes && "#FF6C00"} />
          <Text
            style={[globalStyles.secondaryText, likes && { color: "#212121" }]}
          >
            {commentsCount ? `${commentsCount.length}` : "0"}
          </Text>
        </TouchableOpacity>
        {likes ? (
          <TouchableOpacity
            onPress={handleAddLike}
            style={[globalStyles.postCommentsBtn, { marginLeft: 24 }]}
          >
            <LikeIcon />
            <Text style={[globalStyles.secondaryText, { color: "#212121" }]}>
              {likesCount}
            </Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={globalStyles.postLocation}
          onPress={handleMapPress}
        >
          <MapIcon />
          <Text
            style={[globalStyles.mainText, { textDecorationLine: "underline" }]}
          >
            {post.locationName}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;
