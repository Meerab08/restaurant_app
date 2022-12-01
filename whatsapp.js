import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Linking,
  Text,
  View,
} from "react-native";

const WhatsApp = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    "Please follow https://aboutreact.com"
  );

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert("Please insert correct WhatsApp number");
      return;
    }

    // "https://api.whatsapp.com/send?phone=+923064540006";
    let url =
      "https://api.whatsapp.com//send?text=" +
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
      <View>
        <Text>Enter WhatsApp Number</Text>
        <TextInput
          value={mobileNumber}
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
          placeholder={"Enter WhatsApp Number"}
          keyboardType="numeric"
          style={{ borderWidth: 1, width: 190, fontSize: 15 }}
        />
        <Text>WhatsApp Message</Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
          placeholder={"WhatsApp Message"}
          style={{ borderWidth: 1, width: 190, fontSize: 15 }}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={initiateWhatsApp}>
          <Text>Send WhatsApp Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
