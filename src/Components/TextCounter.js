import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TextCounter(props) {
  return <Text style={styles.lucky}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  lucky: {
    fontFamily: "LuckiestGuy-Regular",
    margin: 0,
    color: "yellow",
    textShadowColor: "#5D2E8C",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,

    fontSize: 16,
  },
});
