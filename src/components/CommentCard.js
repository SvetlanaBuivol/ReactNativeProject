import React from "react";
import { View } from "react-native";
import { formatDate } from "../helpers/formatDate";
import { Text } from "react-native";
import { Image } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import unknownPerson from '../assets/images/unknownPerson.jpg'

const CommentCard = ({ text, data, photo }) => {
  const formattedData = formatDate(data);
  return (
    <View style={globalStyles.commentCardContainer}>
      <View style={globalStyles.commentTextContainer}>
        <Text style={globalStyles.commentText}>{text}</Text>
        <Text style={globalStyles.commentDate}>{formattedData}</Text>
      </View>
          <View style={{ flex: '0 0 auto', flexBasis: 'auto' }}>
              {photo ? (<Image source={{ uri: photo }} style={globalStyles.commentImage}/>) : (<Image
              source={unknownPerson}
              style={globalStyles.commentImage}
            />)}
        
      </View>
    </View>
  );
};

export default CommentCard;
