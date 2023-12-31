import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import MapIcon from "../assets/svgs/Svgs/MapIcon";
import { globalStyles } from "../assets/styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/auth/authSelectors";
import { createPost } from "../redux/posts/createPost";

const CreatePostsForm = ({
  control,
  errors,
  onBlur,
  onFocus,
  isValid,
  photo,
  handleSubmit,
  resetPostData,
}) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const userId = useSelector(selectUserId);

  const navigation = useNavigation();

  const handleAddPost = async (data) => {
    try {
      setLoading(true);

      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);

      await createPost({
        location: locationData.coords,
        photo: photo,
        title: data.title,
        locationName: data.location,
        userId,
      });

      navigation.navigate("Posts");
      resetPostData();
    } catch (error) {
      console.error("Error getting location: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.createPostInput}>
            <TextInput
              style={globalStyles.mainText}
              placeholder="Назва..."
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              globalStyles.createPostInput,
              { flexDirection: "row", gap: 4 },
            ]}
          >
            <MapIcon />
            <TextInput
              style={globalStyles.mainText}
              placeholder="Місцевість..."
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
        name="location"
      />
      {errors.location && <Text>This is required.</Text>}

      <TouchableOpacity
        style={[
          globalStyles.createPostButton,
          { backgroundColor: isValid && photo ? "#FF6C00" : "#F6F6F6" },
        ]}
        onPress={handleSubmit(handleAddPost)}
        disabled={!isValid}
      >
        <Text
          style={[
            globalStyles.secondaryText,
            { color: isValid && photo ? "white" : "#BDBDBD" },
          ]}
        >
          {!loading ? "Опубліковати" : "Завантаження..."}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CreatePostsForm;
