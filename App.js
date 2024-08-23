import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import LoadingScreen from "./src/Components/LoadingScreen";
import * as NavigationBar from "expo-navigation-bar";

import TagBar from "./src/Components/TagBar";

async function loadFonts() {
  await Font.loadAsync({
    "LuckiestGuy-Regular": require("./assets/fonts/LuckiestGuy-Regular.ttf"),
  });
}

loadFonts();

export default function App() {
  useEffect(() => {
    async function hideNavigationBar() {
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBehaviorAsync("overlay-swipe");
    }
    hideNavigationBar();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return isLoading ? <LoadingScreen /> : <TagBar></TagBar>;
}
