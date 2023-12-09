import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { View, Text } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../assets/styles/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserAvatar,
  selectUserId,
  selectUserName,
} from "../redux/auth/authSelectors";
import { AvatarContainer } from "../components/AvatarContainer";
import { ScrollView } from "react-native-gesture-handler";
import PostCard from "../components/PostCard";
import { useFocusEffect } from "@react-navigation/native";
import { fetchUserPosts } from "../redux/posts/fetchPosts";
import { useEffect } from "react";
import { updateAvatarAsync } from "../redux/auth/authOperations";

const ProfileScreen = () => {
  const userName = useSelector(selectUserName);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  const updateAvatar = async (photo) => {
    try {
      await dispatch(updateAvatarAsync(photo));
    } catch (error) {
      console.error("Error updating avatar: ", error.message);
    }
  };

  const openImagePickerAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      await updateAvatar(result.assets[0].uri);
    }
  };

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
        <AvatarContainer
          openGallery={openImagePickerAsync}
          selectedImage={selectedImage}
        />
        <Text style={globalStyles.headTitle}>{userName}</Text>
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
