import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import PoliticMain from "../../Tabscreens/PoliticMain";
import PoliticContent from "../../Tabscreens/PoliticContent";

const Stack = createStackNavigator();

const PoliticNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PoliticMain"
        component={PoliticMain}
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
        name="PoliticContent"
        component={PoliticContent}
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

export default PoliticNav;
