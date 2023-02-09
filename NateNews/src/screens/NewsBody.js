import React, { useContext, useState, useRef } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from "../components/Searchbar";
import { Image, View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 5px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const todaydate = now.getDate();

const LOGO =
  "https://firebasestorage.googleapis.com/v0/b/natenews-64341.appspot.com/o/nateicon.png?alt=media";

const Iconpath = "C:/Users/002/React-native/NateNews/assets/icon.png";
const AD1path = "C:/Users/002/React-native/NateNews/assets/ad1.png";
const AD2path = "C:/Users/002/React-native/NateNews/assets/ad2.png";
const Artipic1 = "C:/Users/002/React-native/NateNews/assets/artipic1.png";
const Artipic2 = "C:/Users/002/React-native/NateNews/assets/artipic2.png";
const Artipic3 = "C:/Users/002/React-native/NateNews/assets/artipic3.png";

const NewsBody = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todaydate = date.getDate();

  return (
    <Container insets={insets}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
            marginTop: -25,
          }}
        >
          {year}.{month}.{todaydate}
        </Text>
      </View>
      <SearchBar />
    </Container>
  );
};

export default NewsBody;
