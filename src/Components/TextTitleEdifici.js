import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TextTitleEdifici(props) {
  return <Text style={styles.lucky}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  lucky: {
    fontFamily: "LuckiestGuy-Regular",
    margin: 0,
    color: "#5D2E8C",
    width: 100,
    flexWrap: "wrap",

    fontSize: 17,
  },
});
