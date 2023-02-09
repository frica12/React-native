import React from "react";
import { Image, View, Text, Platform, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import Auth from "./Auth";
import Auth2 from "./Auth2";
import Auth3 from "./Auth3";
import { Button } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import Tab from "./Tab";
import Flat from "../screens/Flat";

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
        headerStyle: {
          backgroundColor: "#FA5858",
        },
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
        name="Nate"
        component={Auth}
        options={{
          drawerLabel: "네이트",
          drawerLabelStyle: styles.drawerLabel,
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

      <Drawer.Screen
        name="News"
        component={Tab}
        options={{
          drawerLabel: "뉴스",
          drawerLabelStyle: styles.drawerLabel,
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

      <Drawer.Screen
        name="Blank1"
        component={Auth}
        options={{ drawerLabel: "연예", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank2"
        component={Flat}
        options={{ drawerLabel: "판", drawerLabelStyle: styles.drawerLabel }}
      />

      <Drawer.Screen
        name="Blank3"
        component={Auth3}
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
