import React, { useState } from "react";
import { Text, View } from "react-native";
import Unit from "./unit";

const MyFood = () => {
  const CONTENT = [
    {
      title: "Appetizers",
      item1: "Spring Roll",
      item2: "Plain Fries",
      item3: "Mayo Fries",
    },
    {
      title: "Soup",
      item1: "Chicken Tortilla Soup",
      item2: "Old-Fashioned Beef Stew",
      item3: "Vegan Corn Chowder",
    },
    {
      title: "Pizzas",
      item1: "Frank Pepe Pizzeria",
      item2: "Pizza Margherita",
      item3: "Italian Sausage Pan Pizza",
    },
  ];
  const [data, setData] = useState(CONTENT);

  return (
    <View>
      {data.map((curElement, index) => {
        return <Unit key={index} {...curElement} />;
      })}
    </View>
  );
};

export default MyFood;
