import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config";


export const fetchUserPosts = async (userId) => {
    try {
        const q = query(
            collection(db, 'posts'),
            where('userId', '==', userId)
        );
        const querySnapshot = await getDocs(q);

        const userPosts = [];
        querySnapshot.forEach((doc) => {
            userPosts.push({ id: doc.id, ...doc.data() });
        });

        return userPosts;
    } catch (error) {
        console.error('Error fetching user posts: ', error);
        throw error;
    }
};