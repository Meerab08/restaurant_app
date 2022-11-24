import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const Test = () => {
  const initialState = [
    {
      name: "abc",
      counter: 0,
    },
    {
      name: "ghi",
      counter: 0,
    },
    {
      name: "xyz",
      counter: 0,
    },
  ];
  const [state, setState] = useState(initialState);
  const [text, setText] = useState("");

  const clickButton = (e) => {
    // make a shallow copy of the array
    console.log(text);
    console.log(e);
    let tempState = [...state];
    console.log("hellooo");
    //make a shallow copy of the element you want to mutate
    let tempElement = { ...tempState[0] };
    console.log(tempElement);
    //update the property you are interseted in
    tempElement.counter = tempElement.counter + 1;
    //put it back to the array
    // as, we are mutating the array that's why we made a copy first
    tempState[0] = tempElement;
    //set the state of the new/copy array
    setState(tempState);
  };

  // const textInputFunction = () => {
  //   const a = console.log();
  // };

  return (
    <>
      <TextInput style={{ height: 50, width: 240 }} onChangeText={setText} />
      <Button
        onPress={() => clickButton("jjj")}
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
        value="worlddd"
        style={{ backgroundColor: "#E3872C" }}
      >
        Hello
      </Button>
    </>
  );
};

export default Test;
