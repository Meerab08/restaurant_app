import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Animated } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "./resturant/menu";
import Unit from "./resturant/unit";
import Quantity from "./resturant/quantity";
import MyFood from "./resturant/mapping";
import Test from "./resturant/test";
import MyStack from "./resturant/screens";

// Keep the splash screen visible while we fetch resources

export default function App() {
  return (
    <MyStack />
    // <NavigationContainer>
    //   <View
    //     style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    //     onLayout={onLayoutRootView}
    //   >
    //     <Menu />
    //     {/* <Test /> */}
    //     {/* <Items /> */}
    //     {/* <Unit /> */}
    //     {/* <Quantity /> */}
    //     {/* <MyFood /> */}
    //   </View>
    // </NavigationContainer>
  );
}
