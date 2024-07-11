import React from "react";
import { ActivityIndicator, StyleSheet, View, Image, Text } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text> Town Cat </Text>
      <Image
        source={require("../../assets/gattonormale.jpg")}
        style={styles.image}
      />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
