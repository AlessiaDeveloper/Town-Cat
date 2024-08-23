import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GattoHome from "./TagBar/GattoHome";
import Upgrade from "./TagBar/Upgrade";
import CrocShop from "./TagBar/CrocShop";
import ShopScat from "./ShopScat";
import Rinascita from "./Rinascita";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconImage;

            if (route.name === "Gatto") {
              iconImage = focused
                ? require("./../../assets/gattofeliceSpec.png")
                : require("./../../assets/gattofelic.png");
            } else if (route.name === "ShopScat") {
              iconImage = focused
                ? require("./../../assets/scatoletteSpec.png")
                : require("./../../assets/scatolette.png");
            } else if (route.name === "Rinascita") {
              iconImage = focused
                ? require("./../../assets/rinascitaSpec.png")
                : require("./../../assets/rinascita.png");
            } else if (route.name === "Shop") {
              iconImage = focused
                ? require("./../../assets/croccaSpec.png")
                : require("./../../assets/crocca.png");
            } else if (route.name === "Upgrade") {
              iconImage = focused
                ? require("./../../assets/fulmineSpec.png")
                : require("./../../assets/fulmine.png");
            }

            return (
              <Image source={iconImage} style={{ width: 40, height: 40 }} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarItemStyle: {
            backgroundColor: "#5D2E8C",
            padding: 4,
            width: 10,
          },
          tabBarInactiveTintColor: "gray",
          tabBarLabel: () => null,
        })}
      >
        <Tab.Screen name="Gatto" component={GattoHome} />
        <Tab.Screen name="ShopScat" component={ShopScat} />
        <Tab.Screen name="Upgrade" component={Upgrade} />
        <Tab.Screen name="Rinascita" component={Rinascita} />
        <Tab.Screen name="Shop" component={CrocShop} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  colors: {
    height: 0,
  },
};
