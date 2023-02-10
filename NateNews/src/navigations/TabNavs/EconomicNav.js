import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main, NewsBody } from "../../screens";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Sp from "../../Tabscreens/SportMain";
import NB from "../../Tabscreens/SportContent";

const Stack = createStackNavigator();

const EconomicNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Natepage"
        component={Sp}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#FA5858",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            color: "#ffffff",
            ...Platform.select({
              ios: {
                fontFamily: "Futura",
              },
              android: {
                fontFamily: "monospace",
              },
            }),
          },
        }}
      />

      <Stack.Screen
        name="NB"
        component={NB}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#FA5858",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            color: "#ffffff",
            ...Platform.select({
              ios: {
                fontFamily: "Futura",
              },
              android: {
                fontFamily: "monospace",
              },
            }),
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default EconomicNav;
