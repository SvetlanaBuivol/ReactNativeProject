import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import MapIcon from "../assets/svgs/Svgs/MapIcon";
import { globalStyles } from "../assets/styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../redux/auth/authSelectors";
// import LocationInput from "./LocationInput";

//AIzaSyAoEXZsOxIuBoEGcnHFmnEY8na8-zaW-gw

const CreatePostsForm = ({ control, errors, onBlur, onFocus, photo, handleSubmit }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false)

  const userId = useSelector(selectUserId)
  
  const navigation = useNavigation();

  const handleGetLocation = async (data) => {
    try {
      setLoading(true)

      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        console.error('Permission to access location was denied')
        return
      }

      const locationData = await Location.getCurrentPositionAsync({})
      setLocation(locationData)

      navigation.navigate('Posts', {
        location: locationData.coords,
        photo: photo,
        title: data.title,
        locationName: data.location,
      })
    } catch (error) {
      console.error('Error getting location: ', error)
    } finally {
      setLoading(false)
    }
  }

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
          <View style={[globalStyles.createPostInput, { flexDirection: "row", gap: 4 }]}>
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


          <TouchableOpacity style={globalStyles.createPostButton} onPress={handleSubmit(handleGetLocation)}>
        <Text style={globalStyles.secondaryText}>{!loading ? 'Опубліковати' : 'Завантаження...'}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CreatePostsForm;
