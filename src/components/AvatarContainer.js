import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import SvgAdd from "../assets/svgs/Svgs/AddIcon";
import { globalStyles } from "../assets/styles/styles";
import DeleteIcon from "../assets/svgs/Svgs/DeleteIcon";
import { useSelector } from "react-redux";
import { selectUserAvatar } from "../redux/auth/authSelectors";

export const AvatarContainer = ({ openGallery, selectedImage }) => {
  const userAvatar = useSelector(selectUserAvatar)
  return selectedImage || userAvatar ? (
    <View
      style={[globalStyles.avatarContainer, { backgroundColor: "transparent" }]}
    >
      <Image
        source={{ uri: selectedImage ? selectedImage : userAvatar }}
        style={{ width: "100%", height: "100%", borderRadius: 16 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 76, left: 100 }}
        onPress={openGallery}
      >
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={globalStyles.avatarContainer}>
      <TouchableOpacity
        style={{ position: "absolute", top: 81, left: 107 }}
        onPress={openGallery}
      >
        <SvgAdd />
      </TouchableOpacity>
    </View>
  );
};
