import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import SportMain from "../../Tabscreens/SportMain";
import SportContent from "../../Tabscreens/SportContent";

const Stack = createStackNavigator();

const SportNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SportMain"
        component={SportMain}
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
        name="SportContent"
        component={SportContent}
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

export default SportNav;
