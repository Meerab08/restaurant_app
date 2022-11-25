import React, { useState } from "react";
import { Text, TextInput, Button, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { OrderContext } from "./ordercontext";

const Quantity = (props) => {
  const [quantity, setQuantity] = useState(0);
  const { order, setOrder } = React.useContext(OrderContext);
  console.log("setOrder", setOrder);
  // const { order } = props;
  // const { setOrder } = props;
  const { key1, unit, value } = props;

  function addQuantity() {
    setQuantity(quantity + 1);
    console.log(`quantity: ${quantity}`);
    // =========================================
    const indexx = order.map((i, ind) => {
      for (var key in i.items) {
        if (key === key1) {
          console.log("k", i.items?.[key1][unit]);
          order[ind].items[key1][unit] = order[ind].items[key1][unit] + 1;
          console.log("u", order[ind].items[key1][unit]);
          // return { ...order[ind].items, ...order[ind].items[key2] };
        }
      }
    });
    // =========================================
    order.map((m) => {
      console.log("add", m);
    });
    setOrder([...order]);
    // =========================================
  }
  function removeQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      console.log(`quantity: ${quantity}`);
      const indexx = order.map((i, ind) => {
        for (var key in i.items) {
          if (key === key1) {
            console.log("k", i.items?.[key1][unit]);
            order[ind].items[key1][unit] = order[ind].items[key1][unit] - 1;
            console.log("u", order[ind].items[key1][unit]);
          }
        }
      });
      setOrder([...order]);
    }
    // =========================================
    order.map((m) => {
      console.log(m);
    });
    // =========================================
  }

  return (
    <TouchableOpacity style={{ flexDirection: "row", marginRight: 5 }}>
      <Icon.Button
        iconStyle={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
        name="minus"
        borderRadius={0}
        size={12}
        color="white"
        onPress={removeQuantity}
      />

      {/* <Button title="Down" onPress={removeQuantity} /> */}
      <TextInput
        value={value.toString()}
        editable={false}
        style={{
          backgroundColor: "#F4A6A6",
          width: 40,
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      />
      <Icon.Button
        iconStyle={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
        borderRadius={0}
        name="plus"
        size={12}
        color="white"
        onPress={addQuantity}
      />
      {/* <Button title="Up" onPress={addQuantity} /> */}
    </TouchableOpacity>
  );
};

export default Quantity;
