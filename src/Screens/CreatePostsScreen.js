import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import * as MediaLibrary from "expo-media-library";
import CreatePostsForm from "../components/CreatePostsForm";
import { globalStyles } from "../assets/styles/styles";
import TrashIcon from "../assets/svgs/Svgs/TrashIcon";
import CameraIcon from "../assets/svgs/Svgs/CameraIcon";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const CreatePostsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      location: "",
    },
  });

  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setCameraPermission(status === "granted");
    })();
  }, []);

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
        setCapturedPhoto(result.assets[0].uri);
        setShowGallery(true);
    }
  };

  const deletePhoto = () => {
    setCapturedPhoto(null);
    setShowGallery(false);
    reset();
  };

  if (cameraPermission === null) {
    return <View />;
  }
  if (cameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={globalStyles.mainContainer}>
      {showGallery ? (
        <Image source={{ uri: capturedPhoto }} style={globalStyles.cameraBox} />
      ) : (
        <Camera
          style={globalStyles.cameraBox}
          type={cameraType}
          ref={(ref) => setCameraRef(ref)}
        >
          {capturedPhoto ? (
              <Image
                source={{ uri: capturedPhoto }}
                style={[globalStyles.cameraBox, {marginBottom: 0}]}
              />
          ) : (
            <TouchableOpacity
              style={globalStyles.cameraButton}
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                  setCapturedPhoto(uri);
                    setShowGallery(false);
                }
              }}
            >
              <CameraIcon />
            </TouchableOpacity>
          )}
        </Camera>
      )}

      <Text
        style={[globalStyles.secondaryText, { marginBottom: 32 }]}
        onPress={() => openGallery()}
      >
        Завантажте фото
      </Text>

      <CreatePostsForm
        control={control}
        errors={errors}
        photo={capturedPhoto}
        handleSubmit={handleSubmit}
      />
      <TouchableOpacity style={globalStyles.trashButton} onPress={deletePhoto}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
