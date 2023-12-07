import React from "react";
import { View } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import CommentsSvg from "../assets/svgs/Svgs/MessageIcon";
import MapIcon from "../assets/svgs/Svgs/MapIcon";
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ post }) => {
  const navigation = useNavigation()

  const handleMapPress = () => {
    navigation.navigate('MapScreen', {postLocation: post.location, title: post.locationName})
  }

  const handleCommentsPress = () => {
    navigation.navigate('Comments')
  }

  return (
    <View style={{ marginBottom: 32 }}>
      <Image source={{ uri: post.imageURL }} style={globalStyles.cameraBox} />
      <Text style={globalStyles.postTitle}>{post.title}</Text>
      <View style={globalStyles.postDescr}>
        <TouchableOpacity onPress={handleCommentsPress}>
          <CommentsSvg />
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.postLocation} onPress={handleMapPress}>
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
