import React, { useContext, useState, useRef } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, View, Text, ScrollView } from "react-native";

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

const News = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todaydate = date.getDate();

  return (
    <Container insets={insets}>
      <View>
        <StyledText>
          {year}.{month}.{todaydate}
        </StyledText>
        <StyledText>News</StyledText>
        <StyledText>ffff</StyledText>
      </View>
    </Container>
  );
};

export default News;
