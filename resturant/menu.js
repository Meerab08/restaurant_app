import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import Unit from "./unit";

const CONTENT = [
  {
    title: "Appetizers",
    items: {
      "Spring Roll": { Half: 0, Full: 0 },
      "Plain Fries": { Half: 0, Full: 0 },
      "Mayo Fries": { Half: 0, Full: 0 },
    },
    units: { Half: 0, Full: 0 },
  },
  {
    title: "Soup",
    items: {
      "Chicken Tortilla Soup": { Half: 0, Full: 0 },
      "Old-Fashioned Beef Stew": { Half: 0, Full: 0 },
      "Vegan Corn Chowder": { Half: 0, Full: 0 },
    },
    units: { Half: 0, Full: 0 },
  },
  {
    title: "Pizzas",
    items: {
      "Frank Pepe Pizzeria": { Small: 0, Medium: 0, Large: 0 },
      "Pizza Margherita": { Small: 0, Medium: 0, Large: 0 },
      "Italian Sausage Pan Pizza": { Small: 0, Medium: 0, Large: 0 },
    },
    units: { Small: 0, Medium: 0, Large: 0 },
  },
];

// ***************************************************************
// ***************************************************************

const Menu = ({ navigation }) => {
  // Ddefault active selector2
  const [activeCategory, setActiveCategory] = useState([]);
  const [order, setOrder] = useState(CONTENT);
  // const [order, setOrder] = useState(CONTENT);

  const setSections = (sections) => {
    //setting up a active section state
    setActiveCategory(sections.includes(undefined) ? [] : sections);
  };

  const foodCategory = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const foodItems = (content, index, isActive, sections) => {
    console.log(content);
    // **********************************************************************
    //***********************  return of category object ************************* */
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Animatable.View
          duration={400}
          style={[styles.content, isActive ? styles.active : styles.inactive]}
          transition="backgroundColor"
        >
          {Object.keys(content.items).map((itemkey, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Animatable.Text
                animation={isActive ? "bounceIn" : undefined}
                style={{ textAlign: "center", minWidth: 100, marginRight: 5 }}
              >
                {itemkey}
              </Animatable.Text>
              {/* <Quantity order={order} setOrder={setOrder} key1={itemkey} /> */}
              {console.log(itemkey)}
              <Unit
                units={content.units}
                order={order}
                setOrder={setOrder}
                key2={itemkey}
              />
            </View>
          ))}
        </Animatable.View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView scrollEnabled>
          <View style={{ backgroundColor: "#000", height: 1, marginTop: 10 }} />
          <View
            style={{
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              height: 220,
            }}
          >
            <Image source={require("../assets/haveli.png")} />
          </View>

          <View style={{ backgroundColor: "#000", height: 1, marginTop: 10 }} />
          <View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.title}>
                Haweli Restaurnt provides the Best Quality Food
              </Text>
              <Text style={styles.selectTitle}>
                Please select your desired Food!
              </Text>
            </View>

            <Accordion
              activeSections={activeCategory}
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              sections={CONTENT}
              renderHeader={foodCategory}
              renderContent={foodItems}
              duration={400}
              onChange={setSections}
            />
            {/* </ScrollView> */}
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Cart", {
                customer_order: order,
                customer_setOrder: setOrder,
              })
            }
          >
            <Text
              style={{
                backgroundColor: "black",
                marginLeft: 145,
                width: 100,
                height: 30,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              View Cart
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    minWidth: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    padding: 20,
    backgroundColor: "#fff",

    // justifyContent: "center",
    // alignItems: "center",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },

  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    textAlign: "center",
  },
});
