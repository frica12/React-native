import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { News, Main } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nate"
        component={Main}
        options={{
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
        name="News"
        component={News}
        options={{
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

export default Auth;
