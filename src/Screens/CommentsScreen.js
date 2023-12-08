import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import UpIcon from "../assets/svgs/Svgs/UpIcon";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectUserAvatar, selectUserId } from "../redux/auth/authSelectors";
import { addComment } from "../redux/comments/addComment";
import { useEffect } from "react";
import { getComments } from "../redux/comments/getComments";
import CommentCard from "../components/CommentCard";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

const CommentsScreen = ({ route }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const { photo, postId } = route.params;
  const userAvatar = useSelector(selectUserAvatar);
  const userId = useSelector(selectUserId);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments in UEff: ", error);
      }
    };
    fetchComments();
  }, [postId]);

  const handleCreateComment = async ({ comment }) => {
    const newComment = await addComment({
      postId,
      text: comment,
      owner: { userId, avatar: userAvatar },
    });
    setComments((prevComments) => [newComment, ...prevComments]);
    reset();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 68 : 0}
      style={{ flex: 1 }}
    >
      <View style={globalStyles.mainContainer}>
        <Image
          source={{ uri: photo }}
          style={[globalStyles.cameraBox, { marginBottom: 32 }]}
        />
        <ScrollView>
          <View style={{ gap: 24 }}>
            {comments.map((comment) => (
              <CommentCard
                key={comment.id}
                text={comment.text}
                photo={userAvatar}
                data={comment.createdAt}
              />
            ))}
          </View>
        </ScrollView>

        <View style={{ marginTop: 31 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={globalStyles.commentInput}>
                <TextInput
                  style={[globalStyles.mainText, { width: "87%" }]}
                  placeholder="Коментувати..."
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <TouchableOpacity
                  style={globalStyles.commentBtn}
                  onPress={handleSubmit(handleCreateComment)}
                >
                  <UpIcon />
                </TouchableOpacity>
              </View>
            )}
            name="comment"
          />
          {errors.comment && <Text>This is required.</Text>}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;
