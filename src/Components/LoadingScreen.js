import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/cattrono.png")}
        style={styles.image}
      >
        <ActivityIndicator />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    zIndex: 1,
    resizeMode: "contain",
  },
  logo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
    zIndex: 3,
    elevation: 3,
  },
});
