import React from "react";
import { StyleSheet, Text } from "react-native";

// async function loadFonts() {
//   await Font.loadAsync({
//     "LuckiestGuy-Regular": require("./../../assets/fonts/LuckiestGuy-Regular.ttf"),
//   });
// }

// loadFonts();

export default function TextLucky(props) {
  return <Text style={styles.lucky}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  lucky: {
    fontFamily: "LuckiestGuy-Regular",
    margin: 0,
    color: "#2EC4B6",
    textShadowColor: "#5D2E8C",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
