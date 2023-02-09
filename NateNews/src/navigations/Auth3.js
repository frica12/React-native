import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Newspage, Main, NewsBody } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const Auth3 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsBody"
        component={NewsBody}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#FA5858",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth3;
