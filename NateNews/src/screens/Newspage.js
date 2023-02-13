import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../components/Searchbar";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const Newspage = ({ navigation }) => {
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
            marginTop: 10,
          }}
        >
          {year}.{month}.{todaydate}
        </Text>
      </View>
      <SearchBar />
      <ScrollView>
        <Container insets={insets}></Container>
      </ScrollView>
    </Container>
  );
};

export default Newspage;
