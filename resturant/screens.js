import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./menu";
import ViewCart from "./viewcart";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
const MyStack = () => {
  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Cart" component={ViewCart} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MyStack;
