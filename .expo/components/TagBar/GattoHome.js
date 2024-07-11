import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";
import TextLucky from "../../UI/TextLucky";
import EdificiPurchase from "../EdificiPurchase";
import ModalSettings from "../ModalSettings";
import ModalAchievment from "../ModalAchievment";

async function loadFonts() {
  await Font.loadAsync({
    "LuckiestGuy-Regular": require("./../../../assets/fonts/LuckiestGuy-Regular.ttf"),
  });
}

loadFonts();

// Separate FactoryButton Component
const FactoryButton = ({ onPress, label }) => (
  <TouchableOpacity style={styles.factoryButton} onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default function GattoHome() {
  const [score, setScore] = useState(0);
  const [factories, setFactories] = useState(0);

  if (score > 1) {
    textLog = score + "x onPress";
  } else if (score > 0) {
    textLog = "onPress";
  }

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

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ModalSettings></ModalSettings>
        <Animatable.View ref={buttonRef}>
          {/* Immagine normale */}
          <Pressable
            ref={buttonRef}
            onPress={() => {
              setScore((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "red" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            {({ pressed }) => (
              <>
                <Image
                  style={styles.image}
                  source={
                    pressed
                      ? require("./../../../assets/gattofelice.jpg")
                      : require("./../../../assets/gattonormale.jpg")
                  }
                ></Image>
              </>
            )}
          </Pressable>
        </Animatable.View>
        <ModalAchievment></ModalAchievment>
      </View>
      <View style={styles.sottoGatto}>
        <Text style={styles.factories}>{score}</Text>
      </View>
      {/* <Text style={styles.factories}> {factories}</Text> */}
      <View style={styles.arancio}>
        <TextLucky>N scatolette</TextLucky>
        <TextLucky>N croccantini</TextLucky>
      </View>
      {/* questi devono essere div e non bottoni */}
      <ScrollView>
        <View style={styles.edifici}>
          <Image
            source={require("./../../../assets/gattonormale.jpg")}
            style={styles.imageEdifici}
          />
          <TextLucky>Cat Bistrot</TextLucky>
          <EdificiPurchase
            cost={100}
            increment={1}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../../assets/gattonormale.jpg")}
            style={styles.imageEdifici}
          />
          <TextLucky>Lettiera</TextLucky>
          <EdificiPurchase
            cost={1000}
            increment={5}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../../assets/gattonormale.jpg")}
            style={styles.imageEdifici}
          />
          <TextLucky>Terzo edificio </TextLucky>
          <EdificiPurchase
            cost={5000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginBottom: 10,
    fontWeight: "bold",
  },

  sottoGatto: {},
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
    marginTop: 10,
    width: 250,
    height: 250,
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
