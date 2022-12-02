import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import WhatsApp from "../whatsapp";
import { OrderContext } from "./ordercontext";

const ViewCart = ({ navigation }) => {
  const { show, setShow } = React.useContext(OrderContext);
  const [delivery, setDelivery] = useState({});
  let Message = "";

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
  console.log("delivery", delivery);

  const mapObjectToArray = (object) =>
    Object.keys(object).map((data) => ({ item: data, ...object[data] }));
  const arr = mapObjectToArray(delivery);
  console.log(mapObjectToArray(delivery));

  arr.map((obj) => console.log("obj: ", obj));
  // ********************************************************************************
  return (
    <View>
      {arr.map((obj, i) => {
        console.log("*******************************");

        return (
          <>
            {Object.keys(obj).map((k, i) => {
              console.log("obj", obj);
              console.log(k, obj[k]);
              k == "item"
                ? (Message += obj[k] + " " + "\n")
                : (Message += k + ": " + obj[k] + "\n");
              console.log("msg: ", Message);
              return (
                <View>
                  {k == "item" ? (
                    <View>
                      <Text>{obj[k]}</Text>
                    </View>
                  ) : (
                    <View>
                      <Text>
                        {k} : {obj[k]}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </>
        );
      })}
      <WhatsApp msg={Message} />
    </View>
  );
};

export default ViewCart;
