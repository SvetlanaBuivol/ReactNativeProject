import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../config";

export const getComments = async (postId) => {
  try {
    const commentsRef = collection(db, "posts", postId, "comments");
    const commentsQuery = query(commentsRef, orderBy("createdAt", "asc"));
    const commentsSnapshot = await getDocs(commentsQuery);

    const comments = [];
    commentsSnapshot.forEach((commentDoc) => {
      const commentData = commentDoc.data();
      comments.push({
        id: commentDoc.id,
        ...commentData,
      });
    });
      return comments
  } catch (error) {
    console.log("Error fetching comments: ", error);
    throw error;
  }
};
