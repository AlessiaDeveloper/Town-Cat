// import * as React from "react";
// import { Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import GattoHome from "../TagBar/GattoHome";
// import SettingsScreen from "./SettingsScreen";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Upgrade from "../TagBar/Upgrade";
// import CrocShop from "../TagBar/CrocShop";
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer theme={MyTheme}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarStyle: {
//             backgroundColor: "#5D2E8C",
//             marginHorizontal: 1,
//             padding: 3,
//           },

//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Gatto") {
//               iconName = focused ? "logo-github" : "information-circle-outline";
//             } else if (route.name === "Rinascita") {
//               iconName = focused ? "skull" : "skull-outline";
//             } else if (route.name === "Upgrade") {
//               iconName = focused ? "cloud-upload" : "cloud-upload-outline";
//             } else if (route.name === "Shop") {
//               iconName = focused ? "diamond" : "diamond-outline";
//             }

//             // You can return any component that you like here!
//             return (
//               <Ionicons
//                 name={iconName}
//                 size={size}
//                 color={color}
//                 backgroundColor={"#CCFF66"}
//               />
//             );
//           },
//           tabBarActiveTintColor: "tomato",
//           tabBarInactiveTintColor: "gray",
//         })}
//       >
//         <Tab.Screen name="Gatto" component={GattoHome} />

//         <Tab.Screen name="Upgrade" component={Upgrade} />
//         <Tab.Screen name="Rinascita" component={SettingsScreen} />
//         <Tab.Screen name="Shop" component={CrocShop} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GattoHome from "../TagBar/GattoHome";
import Rinascita from "./Rinascita";
import Upgrade from "../TagBar/Upgrade";
import CrocShop from "../TagBar/CrocShop";
import ShopScat from "./ShopScat";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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
