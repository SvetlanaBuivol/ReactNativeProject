import { StyleSheet, Text } from "react-native";

const colors = {
  color: {
    mainText: "#212121",
    secondText: "#BDBDBD",
    greyBg: "#F6F6F6",
    lineColor: "#e8e8e8",
    orange: "#FF6C00",
    darkBlue: "#1B4371",
  },
};

export const globalStyles = StyleSheet.create({
  headTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: colors.color.mainText,
    // marginTop: 92,
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
    // minHeight: "67%",
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
});
