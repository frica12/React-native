import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../screens";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const MainPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={Main}
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

export default MainPage;
