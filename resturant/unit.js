import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import { View } from "react-native";
import AddToCart from "./addtocart";
import { OrderContext } from "./ordercontext";

const Unit = (props) => {
  const { units } = props;
  const { order, setOrder } = React.useContext(OrderContext);
  const { key2 } = props;

  const [unitValue, setUnitValue] = useState({});
  console.log(
    "*************************************************************************************************"
  );

  // console.log(order);
  // const a = order[0];
  // console.log(a.items);
  // const item = a.items;
  // console.log(order[0].items["Mayo Fries"]["Half"]);
  // console.log(item["Mayo Fries"]);
  const quantity = ["Half", "Full"];

  return (
    <View>
      <SelectDropdown
        data={Object.keys(units)}
        onSelect={(selectedItem, index) => {
          console.log("_____________________________________________");
          console.log(selectedItem, index);
          console.log(key2);
          setUnitValue({ item: key2, unit: selectedItem });
          console.log("..............................................");
          console.log(unitValue);
        }}
        defaultButtonText="Select"
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#FFF"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />
      <AddToCart
        unitValue1={unitValue}
        // order1={order}
        setUnitValue1={setUnitValue}
      />
    </View>
  );
};

export default Unit;

// *******************************
//            Styling
// *******************************

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    width: 120,
    height: 30,
    backgroundColor: "#4682B4",
    // borderRadius: 8,
    // fontSize: 10,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    // borderBottomLeftRadius: 12,
    // borderBottomRightRadius: 12,
    // fontSize: 10,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    // fontSize: 10,
  },
  textStyle: { fontWeight: "bold", fontSize: 16, color: "black" },
});
