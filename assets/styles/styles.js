import { StyleSheet, Text } from "react-native";

const colors = {
  color: {
    mainText: "#212121",
    secondText: "#BDBDBD",
    greyBg: "#F6F6F6",
    lineColor: "#e8e8e8",
  },
};

export const globalStyles = StyleSheet.create({
  headTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: colors.color.mainText,
    marginTop: 92,
    marginBottom: 32,
    textAlign: "center",
  },
  container: {
    height: "67%",
    marginTop: "auto",
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
    textAlign: "left",
    borderWidth: 1,
    borderColor: colors.color.lineColor,
    borderRadius: 8,
    backgroundColor: colors.color.greyBg,
    padding: 15,
    fontSize: 16,
  },
});
