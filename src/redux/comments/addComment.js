import { addDoc, collection, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../../config"

export const addComment = async ({ postId, owner, text}) => {
    try {
        const postRef = collection(db, 'posts', postId, 'comments')
        const newCommentRef = await addDoc(postRef, {
            owner: {
                userId: owner.userId,
                avatar: owner.avatar,
            },
            text,
            createdAt: new Date(),
        })
        const newCommentId = newCommentRef.id
        const newCommentSnapshot = await getDoc(newCommentRef)
        const newComment = { id: newCommentId, ...newCommentSnapshot.data() }
        
        return newComment
    } catch (error) {
        console.error('Error adding post: ', error)
        throw error
    }
}