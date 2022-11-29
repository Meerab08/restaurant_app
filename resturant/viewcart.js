import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Quantity from "./quantity";
import { OrderContext } from "./ordercontext";

const ViewCart = ({ navigation, route }) => {
  const { order, setOrder } = React.useContext(OrderContext);

  return (
    <View>
      <ImageBackground
        source={require("../assets/haveli.png")}
        resizeMode="contain"
      ></ImageBackground>

      <Text>This is view cart page!</Text>
      {order.length > 0 ? (
        order.map((i, index) => {
          console.log(
            "=============================================================================================="
          );
          // console.log(i);

          return Object.keys(i.items).map((key) => {
            console.log("key : ", key);

            return Object.keys(i.items[key]).map((key2) => {
              const unit = key2;
              const value = i.items[key][key2];
              console.log("unit/value : ", unit, value);

              if (value > 0) {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                      backgroundColor: "red",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: 290,
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: 16, color: "white", flex: 1 }}>
                        {key}
                      </Text>
                      <Text style={{ fontSize: 16, color: "white", flex: 1 }}>
                        {unit} : {value}
                      </Text>

                      <Quantity
                        order={order}
                        key1={key}
                        unit={unit}
                        value={value}
                        setOrder={setOrder}
                      />
                    </View>
                  </View>
                );
              }
            });
          });
        })
      ) : (
        <Text>Cart is Empty!</Text>
      )}
    </View>
  );
};

export default ViewCart;
