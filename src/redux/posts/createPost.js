import { addDoc, collection, getDoc } from "firebase/firestore"
import { db } from "../../../config"

export const createPost = async ({ photo, location, locationName, title, userId }) => {
    try {
        const docRef = await addDoc(collection(db, 'posts'), {
            imageURL: photo,
            location: {
                latitude: location.latitude,
                longitude: location.longitude,
            },
            locationName,
            title,
            userId,
        })

        const createdPostSnapshot = await getDoc(docRef)
        const createdPostData = createdPostSnapshot.data()
        console.log('Post added: ', createdPostData)
        return {id: docRef.id, ...createdPostData}
    } catch (error) {
        console.error('Error adding post: ', error)
        throw error
    }
}