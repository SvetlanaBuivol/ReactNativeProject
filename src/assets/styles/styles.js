import { StyleSheet } from "react-native";

const colors = {
  color: {
    mainText: "#212121",
    secondText: "#BDBDBD",
    greyBg: "#F6F6F6",
    lineColor: "#e8e8e8",
    orange: "#FF6C00",
    darkBlue: "#1B4371",
    greyText: "rgba(33, 33, 33, 0.8)",
  },
};

export const globalStyles = StyleSheet.create({
  headTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: colors.color.mainText,
    marginBottom: 32,
    textAlign: "center",
  },
  mainText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.color.mainText,
  },
  subTitle: {
    headerTitleAlign: "center",
    headerTintColor: colors.color.mainText,
    headerTitleContainerStyle: {
      backgroundColor: "#FFFFFF",
    },
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
      fontSize: 17,
    },
  },
  errorText: {
    fontSize: 12,
    color: "red",
    fontFamily: "Roboto-Regular",
  },
  authContainer: {
    marginTop: "auto",
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: colors.color.greyBg,
    left: "54%",
    top: 0,
    marginTop: -60,
    marginLeft: -60,
    borderRadius: 16,
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.color.lineColor,
    borderRadius: 8,
    backgroundColor: colors.color.greyBg,
    padding: 15,
  },
  inputFocused: {
    borderColor: colors.color.orange,
    backgroundColor: "white",
  },
  mainButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.color.orange,
    paddingHorizontal: 111,
    paddingVertical: 16,
    borderRadius: 100,
  },
  tabButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.color.orange,
    width: 70,
    height: 40,
    borderRadius: 100,
  },
  cameraBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 250,
    marginBottom: 8,
    backgroundColor: colors.color.greyBg,
    borderRadius: 8,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 38,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  cameraButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 100,
  },
  secondaryText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.color.secondText,
  },
  createPostInput: {
    paddingVertical: 15,
    borderBottomColor: colors.color.lineColor,
    borderBottomWidth: 1,
  },
  createPostButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 100,
    marginTop: 32,
  },
  trashButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: 70,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.color.greyBg,
  },
  postTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: colors.color.mainText,
    marginBottom: 8,
  },
  postDescr: {
    flexDirection: "row",
    alignItems: "center",
  },
  postCommentsBtn: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  postLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: "auto",
  },
  postsUserCardImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userNameCard: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: colors.color.mainText,
  },
  userEmailCard: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: colors.color.greyText,
  },
  commentInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.color.lineColor,
    backgroundColor: colors.color.greyBg,
  },
  commentBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 34,
    height: 34,
    backgroundColor: colors.color.orange,
  },
  commentCardContainer: {
    flexDirection: "row",
    gap: 16,
  },
  commentImage: {
    width: 28,
    height: 28,
    borderRadius: 50,
    overflow: "hidden",
  },
  commentTextContainer: {
    flex: 1,
    width: "100%",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  commentText: {
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    lineHeight: 18,
    color: colors.color.mainText,
    marginBottom: 8,
  },
  commentDate: {
    fontSize: 10,
    color: colors.color.secondText,
  },
  profileContainer: {
    height: "100%",
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
