import React, { useState, useEffect, useCallback, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";
import LoadingScreen from "./.expo/components/LoadingScreen";

import Home from "./.expo/components/Home";

async function loadFonts() {
  await Font.loadAsync({
    "LuckiestGuy-Regular": require("./assets/fonts/LuckiestGuy-Regular.ttf"),
  });
}

loadFonts();

// import fonts from "./assets/fonts";

// Separate FactoryButton Component
const FactoryButton = ({ onPress, label }) => (
  <TouchableOpacity style={styles.factoryButton} onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [score, setScore] = useState(0);
  const [factories, setFactories] = useState(0);
  const [showNormalImage, setShowNormalImage] = useState(true);

  // Stato per gestire la visibilità delle immagini

  // Update score every second based on the number of factories
  useEffect(() => {
    const interval = setInterval(() => {
      if (factories > 0) {
        setScore((prevScore) => prevScore + factories);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [factories]);

  const handlePress = useCallback(() => {
    setScore((prevScore) => prevScore + 1);
    setShowNormalImage(false); // Nascondi l'immagine normale
    // Trigger the animation on press
    if (buttonRef.current) {
      buttonRef.current.bounceIn().then(() => {
        // Ripristina l'immagine allo stato iniziale dopo l'animazione
        setShowNormalImage(true);
      });
    }
  }, []);

  // Ref to access the button component
  const buttonRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return isLoading ? <LoadingScreen /> : <Home></Home>;
}

const styles = StyleSheet.create({
  arancio: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "20px",
    backgroundColor: "#FF6666",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5D2E8C",
  },
  score: {
    fontSize: 24,
    margin: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
  },
  edifici: {
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#CCFF66",
    borderBlockEndColor: "#FF6666",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageEdifici: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  factories: {
    fontFamily: "LuckiestGuy-Regular",
    color: "#2EC4B6",
    backgroundColor: "#CCFF66",
    borderRadius: 5,
    padding: 10,
    textShadowColor: "#5D2E8C",
    fontSize: 24,
    margin: 20,
  },
  factoryButton: {
    padding: 10,
    backgroundColor: "#5D2E8C",
    margin: 10,
    borderRadius: 5,
  },
});
