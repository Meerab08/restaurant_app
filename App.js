import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
  Text,
  View,
} from "react-native";
import MyStack from "./resturant/screens";
import OrderContextProvider from "./resturant/ordercontext";
// import * as SplashScreen from "expo-splash-screen";

export default function App() {
  return (
    <OrderContextProvider>
      <MyStack />
    </OrderContextProvider>
  );
}
