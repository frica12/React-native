import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  SportNav,
  EntertainmentNav,
  PoliticNav,
  EconomicNav,
  SocialNav,
  WorldNav,
} from "./TabNavs/index";

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <TopTab.Navigator tabBarPosition="top">
      <TopTab.Screen name="스포츠" component={SportNav} />
      <TopTab.Screen name="연예" component={EntertainmentNav} />
      <TopTab.Screen name="정치" component={PoliticNav} />
      <TopTab.Screen name="경제" component={EconomicNav} />
      <TopTab.Screen name="사회" component={SocialNav} />
      <TopTab.Screen name="세계" component={WorldNav} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;
