import React, { useState } from "react";
import { Button, Alert, Text } from "react-native";
import { OrderContext } from "./ordercontext";

const AddToCart = (props) => {
  const { unitValue1 } = props;
  const { setUnitValue1 } = props;
  const { order, setOrder } = React.useContext(OrderContext);
  const [add, setAdd] = useState();
  const { show, setShow } = React.useContext(OrderContext);

  const addToCart = () => {
    // console.log("cart", unitValue1);
    if (unitValue1) {
      // console.log(".....................................");
      // console.log(JSON.stringify(order));
      // console.log(".....................................");
      // console.log(unitValue1);
      const key2 = unitValue1.item;
      const selectedItem = unitValue1.unit;

      const index = order.map((i, ind) => {
        for (var food in i.items) {
          // console.log("food: ", food);
          if (food === key2) {
            order[ind].items[key2][selectedItem] =
              order[ind].items[key2][selectedItem] + 1;

            setUnitValue1({});
            // setShow((prev) => [
            //   ...prev,
            //   {
            //     item: food,
            //     unit: selectedItem,
            //     value: order[ind].items[key2][selectedItem],
            //   },
            // ]);
            return { ...order[ind].items, ...order[ind].items[key2] };
          }
        }
      });
      // .................................................
      // order.map((items) => {
      //   console.log(items);
      // });
      // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ", show);
    }
  };

  return (
    <>
      <Button title="Add to Cart" onPress={addToCart} />
    </>
  );
};

export default AddToCart;
