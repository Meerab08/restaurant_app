import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";

import Quantity from "./quantity";

const DropDown = ({ title, item1, item2, item3 }) => {
  const quantity = ["Half", "Full"];
  const [show, setShow] = useState(false);
  const display = () => {
    // console.log(`show: ${show}`);
    setShow(!show);
  };
  return (
    <View>
      <SelectDropdown
        data={quantity}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem, index);
        }}
        defaultButtonText={"Half / Full"}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
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
      <Quantity />
    </View>
  );
};

export default DropDown;

// *******************************
//            Styling
// *******************************

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    // width: 120,
    // height: 30,
    backgroundColor: "#4682B4",
    borderRadius: 0,
    // borderRadius: 8,
    // fontSize: 10,
  },

  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },

  dropdown2DropdownStyle: {
    backgroundColor: "red",
    borderRadius: 0,
    borderWidth: 0,
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
