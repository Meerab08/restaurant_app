import React, { useState, createContext } from "react";

const OrderContext = createContext();

const OrderContextProvider = (props) => {
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
  const [order, setOrder] = useState(CONTENT);

  console.log("dcdcd");
  return (
    <OrderContext.Provider value={{ CONTENT, order, setOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContextProvider;
export { OrderContext };
