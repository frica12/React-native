import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { News, Main } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="News"
        component={News}
        options={{
          headerLeft: ({ onPress, tintColor }) => (
            <MaterialIcons
              name="keyboard-arrow-left"
              size={38}
              color={tintColor}
              onPress={onPress}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
