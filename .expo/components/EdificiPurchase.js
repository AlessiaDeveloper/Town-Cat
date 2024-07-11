import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

export default EdificiPurchase = ({
  cost,
  increment,
  score,
  setScore,
  setFactories,
}) => {
  const handlePurchase = () => {
    if (score >= cost) {
      setScore((prevScore) => prevScore - cost);
      setFactories((prevFactories) => prevFactories + increment);
    } else {
      Alert.alert("Non hai abbastanza punti");
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePurchase}>
        <Text style={styles.factoryButton}>Compra per {cost} punti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  factoryButton: {
    padding: 10,
    backgroundColor: "#5D2E8C",
    color: "#CCFF66",
    margin: 10,
    borderRadius: 5,
  },
});
