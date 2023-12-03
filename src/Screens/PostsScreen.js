import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../assets/styles/styles';

const PostsScreen = ({ route }) => {
    const { location, photo, title, locationName } = route?.params;

    console.log("Location: ", route.params)
    return (
        <View style={globalStyles.mainContainer}>
            <Image source={{ uri: photo }} style={globalStyles.cameraBox} />
            <Text>{title}</Text> 
            <Text>{locationName}</Text> 
        </View>
    );
};

export default PostsScreen;