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
import TextLucky from "../Components/TextLucky";
import EdificiPurchase from "../Components/EdificiPurchase";
import ModalSettings from "../Components/ModalSettings";
import ModalAchievment from "../Components/ModalAchievment";
import TextTitleEdifici from "../Components/TextTitleEdifici";

async function loadFonts() {
  await Font.loadAsync({
    "LuckiestGuy-Regular": require("../../assets/fonts/LuckiestGuy-Regular.ttf"),
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
          <Pressable
            ref={buttonRef}
            onPress={() => {
              setScore((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#5D2E8C" : "#5D2E8C",
                opacity: pressed ? 0.8 : 1,
              },
              styles.gattoClicker,
            ]}
          >
            {({ pressed }) => (
              <>
                <Image
                  style={styles.image}
                  source={
                    pressed
                      ? require("./../../assets/cat1.png")
                      : require("./../../assets/gatto2.0.png")
                  }
                ></Image>
              </>
            )}
          </Pressable>
        </Animatable.View>
        <ModalAchievment></ModalAchievment>
      </View>

      {/* <Text style={styles.factories}> {factories}</Text> */}
      <View style={styles.arancio}>
        <TextLucky>N scatolette</TextLucky>
        <TextLucky>{score}</TextLucky>
      </View>
      {/* questi devono essere div e non bottoni */}
      <ScrollView style={styles.containerEdifici}>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/chef.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Bistrot</TextTitleEdifici>
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
            source={require("./../../assets/gym.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Red Dot Gym</TextTitleEdifici>
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
            source={require("./../../assets/office.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Kibble's Bank</TextTitleEdifici>
          <EdificiPurchase
            cost={5000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/catnip.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Catnip Garden</TextTitleEdifici>
          <EdificiPurchase
            cost={10000}
            increment={30}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/parkour.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Parkour Park</TextTitleEdifici>
          <EdificiPurchase
            cost={100000}
            increment={100}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/pittore.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Atelier</TextTitleEdifici>
          <EdificiPurchase
            cost={500000}
            increment={500}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/beach cleaner.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Beach cleaner</TextTitleEdifici>
          <EdificiPurchase
            cost={1000000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/hospital.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Hospital</TextTitleEdifici>
          <EdificiPurchase
            cost={100000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/sushi.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Sushi restaurant</TextTitleEdifici>
          <EdificiPurchase
            cost={50000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/spa.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Spa</TextTitleEdifici>
          <EdificiPurchase
            cost={50000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/toystore.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Toy store</TextTitleEdifici>
          <EdificiPurchase
            cost={50000}
            increment={10}
            score={score}
            setScore={setScore}
            setFactories={setFactories}
          />
        </View>
        <View style={styles.edifici}>
          <Image
            source={require("./../../assets/taxi.png")}
            style={styles.imageEdifici}
          />
          <TextTitleEdifici>Taxi station</TextTitleEdifici>
          <EdificiPurchase
            cost={50000}
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
    backgroundColor: "#5D2E8C",
    borderTopWidth: 2,
    borderTopColor: "yellow",
    fontSize: 20,
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

  containerEdifici: {
    height: "40%",
  },
  edifici: {
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "white",
    borderBlockEndColor: "#5D2E8C",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageEdifici: {
    width: 110,
    height: 80,
    resizeMode: "contain",
    margin: 2,
  },
  image: {
    marginTop: 5,
    width: 200,
    height: 300,
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
