import React from "react";
import { Image, View, Text, Platform, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import Auth from "./Auth";
import { News } from "../screens";
import { Button } from "../components";

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 17,
  },
  button: {
    backgroundColor: "#a6a6a6",
  },
});

const Sidebar = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#F2F2F2",
        },
        drawerActiveTintColor: "#FA5858",
      }}
      drawerContent={(props) => (
        <View style={{ backgroundColor: "c" }}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginTop: 50,
              marginBottom: 30,
            }}
            source={require("C:/Users/002/React-native/NateNews/assets/IM1.png")}
          />
          <View style={{ backgroundColor: "#ffffff" }}>
            <DrawerItemList {...props} />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#F2F2F2",
            }}
          >
            <View
              style={{
                width: "45%",
                marginLeft: "3%",
                marginRight: "3%",
              }}
            >
              <Button
                title="로그인"
                onPress={() => console.log("Button 1 pressed")}
                textStyle={{
                  color: "white",
                  fontWeight: "bold",
                }}
                containerStyle={styles.button}
              />
            </View>
            <View style={{ width: "45%", marginRight: "3%" }}>
              <Button
                title="공지사항"
                onPress={() => console.log("Button 2 pressed")}
                textStyle={{
                  color: "white",
                  fontWeight: "bold",
                }}
                containerStyle={styles.button}
              />
            </View>
          </View>
        </View>
      )}
    >
      <Drawer.Screen
        name="Main"
        component={Auth}
        options={{
          drawerLabel: "네이트",
          drawerLabelStyle: styles.drawerLabel,
        }}
      />

      <Drawer.Screen
        name="News"
        component={News}
        options={{ drawerLabel: "뉴스", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank1"
        component={Auth}
        options={{ drawerLabel: "연예", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank2"
        component={Auth}
        options={{ drawerLabel: "판", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank3"
        component={Auth}
        options={{ drawerLabel: "날씨", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank4"
        component={Auth}
        options={{ drawerLabel: "운세", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank5"
        component={Auth}
        options={{ drawerLabel: "썰", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank6"
        component={Auth}
        options={{ drawerLabel: "TV", drawerLabelStyle: styles.drawerLabel }}
      />
    </Drawer.Navigator>
  );
};

export default Sidebar;
