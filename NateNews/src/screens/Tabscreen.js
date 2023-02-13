import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import SearchBar from "../components/Searchbar";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    title: "1. 곽상도가 돈 달래, 아들 통해서 녹음파일...",
  },
  {
    id: "2",
    title: "2. 탄핵안 설명 중에…'필리핀 날씨' 검색한...",
  },
  {
    id: "3",
    title: "3. 편의점 직원 살해 후 달아난 30대…",
  },
  {
    id: "4",
    title: "4. 대기업 다니던 딸, 출산 중 지적장애 얻어…",
  },
  {
    id: "5",
    title: "5. 빅뱅 승리 오늘(9일) 오전 출소",
  },
  {
    id: "6",
    title: "6. 신정환, 라방 중 도박·뎅기열 언급하는...",
  },
  {
    id: "7",
    title: "7. '기부 요정' 한지민, 튀르키예·시리아...",
  },
  {
    id: "8",
    title: "8. 송민호 맞아? 몰라보게 달라진 충격 근황...",
  },
  {
    id: "9",
    title: "9. 유재석, 갈비뼈 실금 간 전소민에...",
  },
  {
    id: "10",
    title: "10. 조국 딸 600만 원 '유죄', 곽상도 아들 50억...",
  },
  {
    id: "11",
    title: "11. 곽상도가 돈 달래, 아들 통해서 녹음파일...",
  },
  {
    id: "12",
    title: "12. 탄핵안 설명 중에…'필리핀 날씨' 검색한...",
  },
  {
    id: "13",
    title: "13. 편의점 직원 살해 후 달아난 30대…",
  },
  {
    id: "14",
    title: "14. 대기업 다니던 딸, 출산 중 지적장애 얻어…",
  },
  {
    id: "15",
    title: "15. 빅뱅 승리 오늘(9일) 오전 출소",
  },
  {
    id: "16",
    title: "16. 신정환, 라방 중 도박·뎅기열 언급하는...",
  },
  {
    id: "17",
    title: "17. '기부 요정' 한지민, 튀르키예·시리아...",
  },
  {
    id: "18",
    title: "18. 송민호 맞아? 몰라보게 달라진 충격 근황...",
  },
  {
    id: "19",
    title: "19. 유재석, 갈비뼈 실금 간 전소민에...",
  },
  {
    id: "20",
    title: "20. 조국 딸 600만 원 '유죄', 곽상도 아들 50억...",
  },
];

const styles = StyleSheet.create({
  // 기사 제목 style
  container: {
    flex: 1,
    width: "100%",
  },
  item: {
    padding: 18,
    marginHorizontal: 0,
  },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
  title: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: "Futura",
      },
      android: {
        fontFamily: "monospace",
      },
    }),
  },
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 5px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const Item = ({ title, onPress }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Item;

export const Sport = () => {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }) => <Item title={item.title} />;

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
      <SafeAreaView
        style={[styles.container, { borderWidth: 1, borderColor: "#e0e0e0" }]}
      >
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </Container>
  );
};

export const Entertainment = () => {
  const insets = useSafeAreaInsets();

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

export const Politic = () => {
  const insets = useSafeAreaInsets();

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
      <Divider></Divider>
      <ScrollView>
        <Container insets={insets}></Container>
      </ScrollView>
    </Container>
  );
};

export const Economic = () => {
  const insets = useSafeAreaInsets();

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

export const Social = () => {
  const insets = useSafeAreaInsets();

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

export const World = () => {
  const insets = useSafeAreaInsets();

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
