import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../config";

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async ({ login, email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      console.log(response.user);

      const userData = {
        uid: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
      };
      return userData;
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
