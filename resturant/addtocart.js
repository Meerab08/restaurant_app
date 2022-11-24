import React, { useState } from "react";
import { Button, Alert, Text } from "react-native";

const AddToCart = (props) => {
  const { unitValue1 } = props;
  const { setUnitValue1 } = props;
  const { order1 } = props;
  const [add, setAdd] = useState();

  const addToCart = () => {
    console.log("cart", unitValue1);
    if (unitValue1) {
      console.log(".....................................");
      console.log(unitValue1);
      // console.log(unitValue1.item);
      // console.log(unitValue1.unit);
      const key2 = unitValue1.item;
      const selectedItem = unitValue1.unit;
      const index = order1.map((i, ind) => {
        for (var food in i.items) {
          console.log("food: ", food);
          if (food === key2) {
            // console.log("food unit: ", i.items?.[key2][selectedItem]);
            // console.log(i.items?.[key2][selectedItem] == 1);
            order1[ind].items[key2][selectedItem] =
              order1[ind].items[key2][selectedItem] + 1;
            // console.log(order1[ind].items[key2][selectedItem]);
            setUnitValue1({});
            return { ...order1[ind].items, ...order1[ind].items[key2] };
            break; //Stop this loop, we found it!
          }
        }
      });
      // .................................................
      order1.map((items) => {
        console.log(items);
      });
    }
  };

  return (
    <>
      <Button title="Add to Cart" onPress={addToCart} />
    </>
  );
};

export default AddToCart;
