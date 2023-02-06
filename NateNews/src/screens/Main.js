import React, { useContext, useState, useRef } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { Button, Image, Input } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const LOGO =
  "https://firebasestorage.googleapis.com/v0/b/natenews-64341.appspot.com/o/nateicon.png?alt=media";

const Main = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);

  const _handleSignBtnPress = () => {
    console.log("News");
  };

  return (
    <Container insets={insets}>
      <Image url={LOGO} />
      <Input
        ref={refPassword}
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => refPassword.current.focus()}
      />
      <Input
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        isPassword={true}
      />
      <Button
        title="News"
        onPress={() => navigation.navigate("News")}
        containerStyle={{}}
        textStyle={{ color: theme.white, fontSize: 25 }}
      />
    </Container>
  );
};

export default Main;
