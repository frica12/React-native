import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Sport,
  Entertainment,
  Politic,
  Economic,
  Social,
  World,
} from "../screens/Tabscreen";
import styled from "styled-components/native";
import Sportnav from "./TabNavs/SportNav";

const TopTab = createMaterialTopTabNavigator();

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 10px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const TopTabNavigation = () => {
  return (
    <TopTab.Navigator tabBarPosition="top">
      <TopTab.Screen name="스포츠" component={Sportnav} />
      <TopTab.Screen name="연예" component={Sportnav} />
      <TopTab.Screen name="정치" component={Politic} />
      <TopTab.Screen name="경제" component={Economic} />
      <TopTab.Screen name="사회" component={Social} />
      <TopTab.Screen name="세계" component={World} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;
