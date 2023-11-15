import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import MapIcon from "../assets/svgs/Svgs/MapIcon";
import { globalStyles } from "../assets/styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

//AIzaSyAoEXZsOxIuBoEGcnHFmnEY8na8-zaW-gw

const CreatePostsForm = ({ control, errors, onBlur, onFocus, onSubmit }) => {
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

          <TouchableOpacity style={globalStyles.createPostButton} onPress={onSubmit}>
              <Text style={globalStyles.secondaryText}>Опубліковати</Text>
      </TouchableOpacity>
    </>
  );
};

export default CreatePostsForm;
