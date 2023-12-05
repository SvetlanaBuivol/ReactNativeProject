import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync, logoutUserAsync, registerUserAsync } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    name: "",
    userId: "",
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
            console.log(payload)
        const { email, displayName, uid } = payload;
        store.email = email;
        store.name = displayName;
        store.userId = uid;
        store.error = null;
        store.loading = false;
        store.isAuth = true;
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
        console.log(payload)
        const { email, displayName, uid } = payload;
        store.email = email;
        store.name = displayName;
        store.userId = uid;
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
        store.email = '';
        store.name = '';
        store.userId = '';
        store.error = null;
        store.loading = false;
          store.isAuth = false;
          console.log(store.isAuth)
      })
      .addCase(logoutUserAsync.rejected, (store) => {
        store.isAuth = true;
        store.loading = false;
      })
  },
});

export default authSlice.reducer;
