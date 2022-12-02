import React, { useState } from "react";
import { Text, TextInput, FlatList, View } from "react-native";

import { OrderContext } from "./ordercontext";

const Unit = (props) => {
  const { units, key2 } = props;
  const { show, setShow } = React.useContext(OrderContext);

  const [unitValue, setUnitValue] = useState({});
  const onChangeFun = (food, foodUnit, text) => {
    var flag = false;
    if (show.length > 0) {
      show.find((fd) => {
        if (fd["item"] == food && fd["unit"] == foodUnit) {
          fd["value"] = text.nativeEvent.text;
          flag = true;
        }
      });
      console.log("flag: ", flag);
      if (flag == false) {
        setShow((prev) => [
          ...prev,
          {
            item: food,
            unit: foodUnit,
            value: text.nativeEvent.text,
          },
        ]);
      }
    } else {
      setShow((prev) => [
        ...prev,
        {
          item: food,
          unit: foodUnit,
          value: text.nativeEvent.text,
        },
      ]);
    }
  };

  // console.log("Show: ", show);

  return (
    <View>
      <FlatList
        data={Object.keys(units)}
        renderItem={({ item }) => (
          <View
            style={{
              paddingTop: 5,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ flex: 0, fontSize: 16 }}>{item}</Text>
            <TextInput
              onEndEditing={(text) => onChangeFun(key2, item, text)}
              style={{ borderWidth: 1, width: 60, height: 25 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Unit;
