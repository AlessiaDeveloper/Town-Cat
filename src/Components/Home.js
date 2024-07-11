import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EdificiPurchase from "./EdificiPurchase";
import GattoHome from "../TagBar/GattoHome";
import SettingsScreen from "./SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ApProva from "./ApProva";
import Upgrade from "../TagBar/Upgrade";
import CrocShop from "../TagBar/CrocShop";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            // Personalizza il colore di sfondo qui
            backgroundColor: "#5D2E8C",
            marginHorizontal: 1,
            padding: 3,
          },
          tabBarItemStyle: {
            backgroundColor: "#5D2E8C",
            borderRightColor: "red",
            borderRightWidth: 1,
            padding: 2,
            width: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Gatto") {
              iconName = focused ? "logo-github" : "information-circle-outline";
            } else if (route.name === "Rinascita") {
              iconName = focused ? "skull" : "skull-outline";
            } else if (route.name === "Upgrade") {
              iconName = focused ? "cloud-upload" : "cloud-upload-outline";
            } else if (route.name === "Shop") {
              iconName = focused ? "diamond" : "diamond-outline";
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                backgroundColor={"#CCFF66"}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Gatto" component={GattoHome} />

        <Tab.Screen name="Upgrade" component={Upgrade} />
        <Tab.Screen name="Rinascita" component={SettingsScreen} />
        <Tab.Screen name="Shop" component={CrocShop} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  justifyContent: "center",
  colors: {
    background: "#5D2E8C",
  },
};
