import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config";

export const addLike = async ({ postId, userId }) => {
  try {
    const postRef = doc(db, "posts", postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const postData = postDoc.data();

      const hasLiked = postData.likes.includes(userId);

      if (!hasLiked) {
        postData.likes.push(userId);

        await updateDoc(postRef, { likes: postData.likes });
      } else {
        const updatedLikes = postData.likes.filter((like) => like !== userId);
        await updateDoc(postRef, { likes: updatedLikes });
      }
      return postData.likes.length;
    } else {
      throw new Error("Post not found");
    }
  } catch (error) {
    console.error("Error adding like: ", error);
    throw error;
  }
};
