import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppNavigation from "./src/components/AppNavigation";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
