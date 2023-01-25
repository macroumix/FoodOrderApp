import React, { useState, useEffect } from "react";

import "./ShoppingCartItems.css";
import { shoppingObject } from "./ShoppingItems";

const ShoppingCartItems = ({ totalNumberOfOrder, cart }) => {
  
  let [cartGrandTotal, setCartGrandTotal] = useState(0);

  useEffect(() => {
    setCartGrandTotal(cartItemList.reduce((sum, element) => sum + element.amount * element.price,0)) 
  }, [cart])
  

  let cartItemList = [];

  for (const item in cart) {
    if (cart[item] > 0) {
      const price = shoppingObject.find(
        (element) => element.name === item
      ).price;
      cartItemList.push({ name: item, amount: cart[item], price: price });
    }
  }

  return (
    <div id="cart-items" class="scrollbar">
      <h3>Items in the Cart</h3>
      {cartItemList.map((element) => {
        return (
          <div className="cart-items-individual">
            <div className="cart-amount">{element.amount}</div>
            <div className="cart-name">{element.name}</div>
            <div className="cart-price">{(element.price*element.amount).toFixed(2)}€</div>
          </div>
        );
      })}
      <div className="order-total">GRAND TOTAL = {cartGrandTotal.toFixed(2)} €</div>
      <div className="order-div">
        {/* <button onClick={() => {cartItemList=[]}} className="clear-button">Clear Order</button> */}
        <br />
        <button className="order-button">ORDER</button>
      </div>
    </div>
  );
};

export default ShoppingCartItems;
