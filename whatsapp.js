import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Linking, Text } from "react-native";

const WhatsApp = (props) => {
  const [mobileNumber, setMobileNumber] = useState("3212953611");
  const { msg } = props;
  const [whatsAppMsg, setWhatsAppMsg] = useState(msg);

  const initiateWhatsApp = () => {
    console.log("in intiate whatsapp method");

    // "https://api.whatsapp.com/send?phone=+923064540006";
    let url =
      "https://api.whatsapp.com/send?text=" +
      whatsAppMsg +
      "&phone=92" +
      mobileNumber;
    console.log(url);
    Linking.openURL(url)
      .then((data) => {
        console.log(data);
        console.log("WhatsApp Opened");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <TouchableOpacity onPress={initiateWhatsApp}>
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
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WhatsApp;
