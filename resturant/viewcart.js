import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { OrderContext } from "./ordercontext";

const ViewCart = ({ navigation, route }) => {
  const { show, setShow } = React.useContext(OrderContext);
  const [delivery, setDelivery] = useState({});
  const map1 = () => {
    show.forEach(
      (d) =>
        (delivery[d.item] = {
          ...delivery[d.item],
          [d.unit]: d.value,
        })
    );
  };
  map1();
  // ********************************************************************************
  // const mapObjectToArray = (object) =>
  // Object.keys(delivery).map((data) => {
  //   console.log("*********************************");
  //   console.log(data);
  //   for (var k in delivery[data]) {
  //     console.log("k: ", k, delivery[data][k]);
  //   }
  // });
  // const arr = mapObjectToArray(delivery);
  // ********************************************************************************
  console.log("delivery", delivery);

  const mapObjectToArray = (object) =>
    Object.keys(object).map((data) => ({ item: data, ...object[data] }));
  const arr = mapObjectToArray(delivery);
  console.log(mapObjectToArray(delivery));

  arr.map((obj) => console.log("obj: ", obj));
  // ********************************************************************************
  return (
    <View>
      {/* {Object.keys(delivery).map((data) => {
        console.log("*********************************");
        console.log(data);
        <Text>{data}</Text>;
        for (var k in delivery[data]) {
          console.log("k: ", k, delivery[data][k]);
          <Text>
            {k}: {delivery[data][k]}
          </Text>;
        }
      })} */}
      {/* __________________________________________________________________________ */}
      {/* __________________________________________________________________________ */}
      {arr.map((obj, i) => {
        console.log("*******************************");
        return (
          <>
            {Object.keys(obj).map((k, i) => {
              console.log("obj", obj);
              // <Text>{k}</Text>;
              console.log(k, obj[k]);
              return (
                <View>
                  <Text>
                    {k} : {obj[k]}
                  </Text>
                </View>
              );
            })}
          </>
        );
      })}
    </View>
  );
};

export default ViewCart;
