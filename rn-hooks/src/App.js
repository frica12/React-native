import React, { useState } from "react";
import styled from "styled-components/native";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Button from "./components/Button";
import CoinInfo from "./components/CoinInfo";
import { useFetch } from "./hooks/useFetch";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 30px;
  color: #ff6600;
`;

export default function App() {
  const URL = "https://api.coinlore.net/api/tickers/?limit=10";
  const { data, error, inProgress } = useFetch(URL);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Container>
      {inProgress && <LoadingText>Loading...</LoadingText>}
      {data?.data.map(({ symbol, name, price_usd }) => (
        <CoinInfo
          key={symbol}
          symbol={symbol}
          name={name}
          price={price_usd}
        ></CoinInfo>
      ))}
    </Container>
  );
}
