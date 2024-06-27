import React, { useState, useEffect, useCallback, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";

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
    // Trigger the animation on press
    if (buttonRef.current) {
      buttonRef.current.bounceIn();
    }
  }, []);

  const buyFactory = useCallback(() => {
    if (score >= 300) {
      setScore((prevScore) => prevScore - 300);
      setFactories((prevFactories) => prevFactories + 1);
    } else {
      alert("Non hai abbastanza punti per acquistare una fabbrica!");
    }
  }, [score]);

  const buyFactory2 = useCallback(() => {
    if (score >= 1000) {
      setScore((prevScore) => prevScore - 1000);
      setFactories((prevFactories) => prevFactories + 5);
    } else {
      alert("Non hai abbastanza punti per acquistare una fabbrica!");
    }
  }, [score]);

  // Ref to access the button component
  const buttonRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Punti: {score}</Text>
      <Animatable.View ref={buttonRef}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image
            source={require("./assets/gattonormale.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
      </Animatable.View>
      <Text style={styles.factories}>Fabbriche: {factories}</Text>
      <View style={styles.arancio}>
        <Text>Numero scatolette</Text>
        <Text>Numero croccantini</Text>
      </View>
      {/* questi devono essere div e non bottoni */}
      <View style={styles.edifici}>
        <Image
          source={require("./assets/gattonormale.jpg")}
          style={styles.imageEdifici}
        />
        <Text style={styles.lucky}>Cat Bistrot</Text>
        <FactoryButton onPress={buyFactory} label="Compra per 300 Punti" />
      </View>
      <View style={styles.edifici}>
        <FactoryButton
          onPress={buyFactory2}
          label="Compra 5 Fabbriche (1000 Punti)"
        />
      </View>
    </View>
  );
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
    fontSize: 24,
    margin: 20,
  },
  factoryButton: {
    padding: 10,
    backgroundColor: "#5D2E8C",
    margin: 10,
    borderRadius: 5,
  },
  lucky: {
    fontFamily: "LuckiestGuy-Regular",
    margin: 0,
    color: "#2EC4B6",
    textShadowColor: "#5D2E8C",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
