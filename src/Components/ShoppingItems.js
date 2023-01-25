import React, { useState } from "react";

import "./ShoppingItems.css";

import Card from "../UI/Card";

export const shoppingObject = [
  {
    name: "Chicken Sandwich",
    price: 15.99,
    image: require("../Images/1.jpeg"),
  },
  {
    name: "BBQ Chicken Burger",
    price: 19.99,
    image: require("../Images/2.jpeg"),
  },
  {
    name: "Churros Fries",
    price: 12.99,
    image: require("../Images/3.jpeg"),
  },
  {
    name: "Mini Timburger",
    price: 22.99,
    image: require("../Images/4.jpeg"),
  },
  {
    name: "Teriyaki Grilled Chicken",
    price: 23.99,
    image: require("../Images/5.jpeg"),
  },
  {
    name: "Grilled Sea Bass",
    price: 16.99,
    image: require("../Images/6.jpeg"),
  },
  {
    name: "Mexican Dip Chicken Tartine",
    price: 15.99,
    image: require("../Images/7.jpeg"),
  },
  {
    name: "Beef Stroganoff",
    price: 15.99,
    image: require("../Images/8.jpeg"),
  },
  {
    name: "Cheese Cake",
    price: 15.99,
    image: require("../Images/9.jpeg"),
  },
  {
    name: "Coffee Latte",
    price: 15.99,
    image: require("../Images/10.jpeg"),
  },
];

const ShoppingItems = ({ cart, onIncrease, onDecrease }) => {
  

 

  return (
    <div id="shopping-object">
      {shoppingObject.map((element, i) => {
        const amount = cart[element.name];
        return (
          <Card key={element.name}>
            <div id="shopping-cart-row-1">
              <div id={"shopping-title-" + (i + 1)}>{element.name}</div>
              <div id={"shopping-price-" + (i + 1)}>{element.price}</div>
            </div>
            <div id="shopping-cart-row-2">
              <img
                src={element.image}
                className="shopping-image"
                id={"shopping-image-" + (i + 1)}
              />
            </div>
            <div id="shopping-cart-row-3">
              <button
                disabled={amount === 5}
                onClick={() => onIncrease(element.name)}
              >
                +
              </button>
              <p id={"item-count-" + (i + 1)}>{amount}</p>
              <button
                disabled={amount === 0}
                onClick={() => onDecrease(element.name)}
              >
                -
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ShoppingItems;