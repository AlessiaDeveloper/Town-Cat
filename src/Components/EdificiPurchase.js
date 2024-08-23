import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import TextLucky from "./TextLucky";

export default EdificiPurchase = ({
  cost,
  increment,
  score,
  setScore,
  setLev,
  setFactories,
}) => {
  const handlePurchase = () => {
    if (score >= cost) {
      setScore((prevScore) => prevScore - cost);
      setFactories((prevFactories) => prevFactories + increment);
      setLev((prevLev) => prevLev + lev);
    } else {
      Alert.alert("Non hai abbastanza punti");
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.factoryButton} onPress={handlePurchase}>
        <TextLucky> {cost} click</TextLucky>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  factoryButton: {
    padding: 10,
    backgroundColor: "#5D2E8C",
    color: "yellow",
    margin: 10,
    borderRadius: 5,
  },
});
