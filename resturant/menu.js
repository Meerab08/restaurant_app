import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import Unit from "./unit";
import { OrderContext } from "./ordercontext";

// ***************************************************************
// ***************************************************************

const Menu = ({ navigation }) => {
  const { CONTENT, order, setOrder } = React.useContext(OrderContext);
  // Ddefault active selector2
  const [activeCategory, setActiveCategory] = useState([]);

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
    // console.log(content);
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
              style={{
                flexDirection: "column",
                // backgroundColor: "yellow",
              }}
            >
              <View
                key={index}
                style={
                  {
                    // flexDirection: "row",
                    // alignItems: "center",
                    // marginBottom: 10,
                  }
                }
              >
                <Animatable.Text
                  animation={isActive ? "bounceIn" : undefined}
                  style={{
                    textAlign: "center",
                    // minWidth: 100,
                    // marginRight: 5,
                    fontWeight: "bold",
                    fontSize: 16,
                    // flex: 1,
                    width: 250,
                  }}
                >
                  {itemkey}
                </Animatable.Text>
                {/* <Unit units={content.units} key2={itemkey} /> */}
              </View>
              <View>
                <Unit units={content.units} key2={itemkey} />
              </View>
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
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
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
    width: "100%",
    minWidth: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    padding: 20,
    backgroundColor: "#FFFACD",
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
