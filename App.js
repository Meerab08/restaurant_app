import React from "react";

import { StatusBar, Text, View } from "react-native";
import MyStack from "./resturant/screens";
import OrderContextProvider from "./resturant/ordercontext";
import Menu from "./resturant/menu";
import Quantity from "./resturant/quantity";
// import * as SplashScreen from "expo-splash-screen";

export default function App() {
  console.log("app console");
  return (
    <OrderContextProvider>
      <MyStack />
    </OrderContextProvider>
  );
}
