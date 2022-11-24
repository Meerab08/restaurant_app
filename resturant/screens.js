import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./menu";
import ViewCart from "./viewcart";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
const MyStack = () => {
  // const [appIsReady, setAppIsReady] = React.useState(false);

  // React.useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // // }, []);

  // const onLayoutRootView = React.useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onLayout={onLayoutRootView}
        > */}
        <Stack.Screen name="Menu" component={Menu} />
        {/* </View> */}
        <Stack.Screen name="Cart" component={ViewCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
