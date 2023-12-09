import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserAsync,
  logoutUserAsync,
  registerUserAsync,
  updateAvatarAsync,
} from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    name: "",
    userId: "",
    avatar: null,
    isAuth: false,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(registerUserAsync.fulfilled, (store, { payload }) => {
        const { email, displayName, uid, avatar } = payload;
        store.email = email;
        store.name = displayName;
        store.userId = uid;
        store.avatar = avatar;
        store.loading = false;
        store.isAuth = true;
        store.error = null;
      })
      .addCase(registerUserAsync.rejected, (store, { payload }) => {
        store.error = payload;
        store.isAuth = false;
        store.loading = false;
      })
      .addCase(loginUserAsync.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (store, { payload }) => {
        console.log("Slice login payload: ", payload);
        const { email, displayName, uid, avatar } = payload;
        store.email = email;
        store.name = displayName;
        store.userId = uid;
        store.avatar = avatar;
        store.error = null;
        store.loading = false;
        store.isAuth = true;
      })
      .addCase(loginUserAsync.rejected, (store, { payload }) => {
        store.error = payload;
        store.isAuth = false;
        store.loading = false;
      })
      .addCase(logoutUserAsync.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (store) => {
        store.email = "";
        store.name = "";
        store.userId = "";
        store.avatar = null;
        store.error = null;
        store.loading = false;
        store.isAuth = false;
        console.log(store.isAuth);
      })
      .addCase(logoutUserAsync.rejected, (store) => {
        store.isAuth = true;
        store.loading = false;
      })
      .addCase(updateAvatarAsync.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(updateAvatarAsync.fulfilled, (store, { payload }) => {
        console.log("Update slice payload", payload)
        store.avatar = payload.avatar;
        store.error = null;
        store.loading = false;
      })
      .addCase(updateAvatarAsync.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
      });
  },
});

export default authSlice.reducer;
