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
import EdificiPurchase2 from "../EdificiPurchase2";

async function loadFonts() {
  await Font.loadAsync({
    "LuckiestGuy-Regular": require("../../../assets/fonts/LuckiestGuy-Regular.ttf"),
  });
}

loadFonts();

export default function Upgrade() {
  const [displayScore, setDisplayScore] = useState(100000);
  const [actualScore, setActualScore] = useState(100000);
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
        <EdificiPurchase2
          cost={item.cost}
          increment={item.increment}
          lev={levels[item.levelKey]}
          setLev={() => handleLevelUp(item.levelKey)}
          actualScore={actualScore}
          setActualScore={setActualScore}
          setFactories={setFactories}
        />
      </View>
    );
  };

  // Funzione per incrementare con callback per evitare di rerenderizzare la funzione ad ogni render del componente
  const incrementScoreGradually = useCallback(() => {
    //calcola la differenza tra actualscore e display score
    const difference = actualScore - displayScore;
    //se la differenza è maggiore di 0 allora fa un arrotondamento per eccesso della differenza
    // diviso 10 e lo mette nella variabile increment
    if (difference > 0) {
      const increment = Math.ceil(difference / 10);
      //poi mostra lo score e mettendo l'increment + lo score a cui è arrivato senza superare lo score attuale
      setDisplayScore((prevScore) =>
        Math.min(prevScore + increment, actualScore)
      );
      //se la differenza è minore di 0 mostra l'actualscore
    } else if (difference < 0) {
      // Gestisce il caso in cui actualScore è minore di displayScore (dopo un acquisto)
      setDisplayScore(actualScore);
    }
  }, [actualScore, displayScore]);

  useEffect(() => {
    //viene creatoun intervallo usando setInterval che chiama la funzione IncrementScoreGraduallyogni 50 ms
    const intervalId = setInterval(incrementScoreGradually, 50);
    //qui il clearInterval serve quando il componente viene smontato o quando le dipendenze cambiano, qui la funzione
    //cancella  l'intervallo creato
    return () => clearInterval(intervalId);
  }, [incrementScoreGradually]);

  useEffect(() => {
    //viene creato un intervallo di 1 secondo che farà la funzione dopo
    const intervalId = setInterval(() => {
      //se gli edifici son maggiori di 0 allora attribuisce all actualscore lo score di prima con quello degli edifici
      if (factories > 0) {
        setActualScore((prevScore) => prevScore + factories);
      }
    }, 1000);
    //questa viene usata quando il componente viene smontato e quando gli edifici cammbiano
    return () => clearInterval(intervalId);
  }, [factories]);

  // questo è per settare i click

  const handlePress = () => {
    setActualScore((current) => current + 1);
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
        <TextCounter>{displayScore}</TextCounter>
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
