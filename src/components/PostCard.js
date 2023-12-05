import React from "react";
import { View } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import CommentsSvg from "../assets/svgs/Svgs/MessageIcon";
import MapIcon from "../assets/svgs/Svgs/MapIcon";

const PostCard = ({ post }) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <Image source={{ uri: post.imageURL }} style={globalStyles.cameraBox} />
      <Text style={globalStyles.postTitle}>{post.title}</Text>
      <View style={globalStyles.postDescr}>
        <TouchableOpacity>
          <CommentsSvg />
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.postLocation}>
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
