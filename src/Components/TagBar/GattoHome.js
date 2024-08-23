import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";
import TextLucky from "../TextLucky";
import EdificiData from "../data/edificaData";
import EdificiPurchase from "../EdificiPurchase";
import ModalSettings from "../ModalSettings";
import ModalAchievment from "../ModalAchievment";
import TextTitleEdifici from "../TextTitleEdifici";
import TextCounter from "../TextCounter";

async function loadFonts() {
  await Font.loadAsync({
    "LuckiestGuy-Regular": require("../../../assets/fonts/LuckiestGuy-Regular.ttf"),
  });
}

loadFonts();

export default function Gattohome() {
  const [score, setScore] = useState(100000);
  const [factories, setFactories] = useState(0);
  const [levels, setLevels] = useState({
    bistrot: 0,
    gym: 0,
    bank: 0,
    garden: 0,
    park: 0,
    atelier: 0,
    beachCleaner: 0,
    hospital: 0,
    sushiRestaurant: 0,
    spa: 0,
    toyStore: 0,
    taxiStation: 0,
  });

  const handleLevelUp = useCallback(
    (buildingName) => {
      setLevels((prevLevels) => ({
        ...prevLevels,
        [buildingName]: prevLevels[buildingName] + 1,
      }));
    },
    [setLevels]
  );

  const renderItem = ({ item }) => {
    return (
      <View style={styles.edifici}>
        <Image source={item.image} style={styles.imageEdifici} />
        <TextTitleEdifici>
          {item.name} {levels[item.levelKey]}
        </TextTitleEdifici>
        <EdificiPurchase
          cost={item.cost}
          increment={item.increment}
          lev={levels[item.levelKey]}
          setLev={() => handleLevelUp(item.levelKey)}
          score={score}
          setScore={setScore}
          setFactories={setFactories}
        />
      </View>
    );
  };

  // Funzione per incrementare il punteggio uno alla volta con requestAnimationFrame
  const incrementScoreGradually = useCallback((increment) => {
    let i = 0;
    let accumulatedIncrement = 0; // Accumula gli incrementi

    const incrementStep = () => {
      if (i < increment) {
        accumulatedIncrement += 1; // Aggiungi 1 all'accumulatore
        i++;

        if (i % 1 === 0) {
          // Aggiorna lo stato ogni 10 incrementi
          setScore((prevScore) => prevScore + accumulatedIncrement);
          accumulatedIncrement = 0; // Resetta l'accumulatore
        }

        requestAnimationFrame(incrementStep);
      }
    };

    incrementStep();
  }, []);

  // Incrementa il punteggio ogni secondo in base al numero di fabbriche
  useEffect(() => {
    const interval = setInterval(() => {
      if (factories > 0) {
        incrementScoreGradually(factories);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [factories, incrementScoreGradually]);

  const handlePress = () => {
    setScore((current) => current + 1);
  };

  const buttonRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 5, flexDirection: "row", justifyContent: "center" }}>
        <ModalSettings />
        <Animatable.View ref={buttonRef}>
          <Pressable
            ref={buttonRef}
            onPress={handlePress}
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
                      ? require("./../../../assets/cat1.png")
                      : require("./../../../assets/gatto2.0.png")
                  }
                />
              </>
            )}
          </Pressable>
        </Animatable.View>
        <ModalAchievment />
      </View>

      <View style={styles.arancio}>
        <TextLucky>N scatolette</TextLucky>
        <TextCounter>{score}</TextCounter>
      </View>

      <SafeAreaView style={styles.containerEdifici}>
        <FlatList
          data={EdificiData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5D2E8C",
  },
  containerEdifici: {
    height: "48%",
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
});
