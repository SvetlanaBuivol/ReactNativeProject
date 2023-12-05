export const selectUser = store => store
export const selectIsAuth = (store) => selectUser(store).isAuth;
export const selectUserId = (store) => selectUser(store).userId;
export const selectUserName = (store) => selectUser(store).name;
export const selectUserEmail = (store) => selectUser(store).email;
export const selectIsLoading = (store) => selectUser(store).loading;
export const selectUserAvatar = (store) => selectUser(store).avatar;
