import React, { useState, useEffect } from "react";

import "./styles.css";
import Navbar from "./Components/Navbar";
import ShoppingItems from "./Components/ShoppingItems";
import Welcome from "./Components/Welcome";
import ShoppingCartItems from "./Components/ShoppingCartItems";
import { shoppingObject } from "./Components/ShoppingItems";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState(
    shoppingObject.reduce((prev, next) => {
      return { ...prev, [next.name]: 0 };
    }, {})
  );

  const totalNumberOfOrder = Object.values(cart).reduce((sum, i) => sum + i, 0)
  
  const shoppingItemIncreaseHandler = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const shoppingItemDecreaseHandler = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: prev[name] - 1,
    }));
  };

  return (
    <>
      <Navbar
        totalNumberOfOrder={totalNumberOfOrder}
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
      />
      <div id="main-div">
      {isCartVisible ? (
        <ShoppingCartItems
          totalNumberOfOrder={totalNumberOfOrder}
          cart={cart}
        />
      ) : (
        <Welcome />
      )}
      <ShoppingItems
        cart={cart}
        onIncrease={shoppingItemIncreaseHandler}
        onDecrease={shoppingItemDecreaseHandler}
      />
      </div>
    </>
  );
}

export default App;