import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import TextLucky from "./TextLucky";

export default function EdificiPurchase2({
  cost,
  increment,
  actualScore,
  setActualScore,
  setLev,
  setFactories,
  lev,
}) {
  const canPurchase = actualScore >= cost;

  const handlePurchase = () => {
    if (canPurchase) {
      setActualScore((prevScore) => prevScore - cost);
      setFactories((prevFactories) => prevFactories + increment);
      setLev((prevLev) => prevLev + 1);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.factoryButton, !canPurchase && styles.disabledButton]}
        onPress={handlePurchase}
        disabled={!canPurchase}
      >
        <TextLucky style={!canPurchase && styles.disabledText}>
          {cost} click
        </TextLucky>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  factoryButton: {
    padding: 10,
    backgroundColor: "#5D2E8C",
    margin: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#A9A9A9", // Un grigio più chiaro per indicare che è disabilitato
  },
  disabledText: {
    color: "#D3D3D3", // Un grigio ancora più chiaro per il testo quando è disabilitato
  },
});
