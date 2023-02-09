import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Newspage, Main } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const Auth2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nate News"
        component={Newspage}
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

export default Auth2;
