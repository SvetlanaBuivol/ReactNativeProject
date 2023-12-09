import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../../config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async ({ login, email, password, avatar }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, {
            login,
            avatar,
          });

          await updateProfile(user, {
            displayName: login,
            photoURL: avatar,
          });
        }
 const userData = {
        uid: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
        avatar: response.user.photoURL,
      };
      
      return userData;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const userData = {
        uid: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
        avatar: response.user.photoURL,
      };
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUserAsync = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            await signOut(auth)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const updateAvatarAsync = createAsyncThunk(
  "auth/updateAvatar",
  async (avatar, thunkAPI) => {
    console.log("avatar in operations", avatar)
    try {

      const user = auth.currentUser;
      console.log("user", user)

      if (user) {
        await updateProfile(user, { photoURL: avatar });
        const updatedUserData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        };
        return updatedUserData;
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)