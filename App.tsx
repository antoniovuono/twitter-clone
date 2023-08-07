import { Dashboard } from "@modules/Dashboard";
import React from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/theme";
import { StatusBar } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    "SFPro-regular": require("./src/assets/fonts/SF-Pro-Text-Regular.otf"),
    "SFPro-medium": require("./src/assets/fonts/SF-Pro-Text-Medium.otf"),
    "SFPro-semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFPro-bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
