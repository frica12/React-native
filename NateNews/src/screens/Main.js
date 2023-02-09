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
  padding: 0 20px;
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

const Main = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todaydate = date.getDate();

  // const [timer, setTimer] = useState("00:00:00");

  // const currentTimer = () => {
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");
  //   setTimer(`${hours}:${minutes}:${seconds}`);
  // };

  // const startTimer = () => {
  //   setInterval(currentTimer, 1000);
  // };

  // startTimer();

  const _handleSignBtnPress = () => {
    console.log("News");
  };

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
      <ScrollView>
        <Container insets={insets}>
          <View style={{ width: "100%", marginTop: -40 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}
            >
              1. 곽상도, '50억 뇌물 혐의' 1심 무죄…정치자금법 위반만 인정
            </Text>
            <Divider style={{ marginVertical: 10 }} />
            <Text
              style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}
            >
              2. 토트넘 승점도 깎인다…맨시티 퇴출시 순위표 공개
            </Text>
            <Divider style={{ marginVertical: 10 }} />
            <Text
              style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}
            >
              3. "아들 혼자 엄마에게 극존칭"…초등생 사망에 이웃 충격
            </Text>
            <Divider style={{ marginVertical: 10 }} />
            <Text
              style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}
            >
              4. 이승기, 이다인과 결혼 앞두고 개종했나…기독교→불교
            </Text>
            <Divider style={{ marginVertical: 10 }} />
            <Text
              style={{ fontWeight: "bold", fontSize: 14, marginBottom: 10 }}
            >
              5. 튀르키예GK 대지진으로 사망…향년 28세
            </Text>
          </View>
        </Container>

        <Container insets={insets}>
          <View
            style={{
              width: "100%",
              marginTop: -70,
              backgroundColor: "#F2F2F2",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: "25%",
                marginVertical: "5%",
              }}
            >
              인기 검색어  :
            </Text>

            <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
                SKT FLYAI
            </Text>
          </View>
        </Container>

        <Container
          insets={insets}
          style={{
            backgroundColor: "white",
            height: 110,
            width: "100%",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Image
              style={{ width: 160, height: 80, marginRight: 20 }}
              source={require(AD1path)}
            />
            <Image
              style={{ width: 160, height: 80 }}
              source={require(AD2path)}
            />
          </View>
        </Container>

        <Container
          insets={insets}
          style={{ backgroundColor: "white", height: 110, width: "100%" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 100, height: 60, marginRight: 20 }}
                source={require(Artipic1)}
              />
              <Text style={{ marginRight: 20, marginTop: 5, width: 100 }}>
                2m 58cm 위치에서 헤더골...
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 100, height: 60, marginRight: 20 }}
                source={require(Artipic2)}
              />
              <Text style={{ marginRight: 20, marginTop: 5, width: 100 }}>
                NBA 최다득점 후 눈물 보인...
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 100, height: 60 }}
                source={require(Artipic3)}
              />
              <Text style={{ marginTop: 5, width: 100 }}>
                경찰 보란 듯 도망간 신호위반...
              </Text>
            </View>
          </View>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default Main;
