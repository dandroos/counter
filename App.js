import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import store from "./state/store";
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

import Nav from "./components/Nav";
import CounterList from "./components/CounterList";
import Dialogs from "./components/Dialogs";

const App = () => {
  const [loaded, err] = useFonts({
    appFont: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const fontConfig = {
    default: {
      regular: {
        fontFamily: "appFont",
        fontWeight: "normal",
      },
    },
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      accent: "#237818",
      primary: "#2d991e",
    },
    fonts: configureFonts(fontConfig),
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return loaded ? (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Nav />
          <Dialogs />
          <CounterList />

          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </Provider>
  ) : (
    <AppLoading />
  );
};

export default App;
