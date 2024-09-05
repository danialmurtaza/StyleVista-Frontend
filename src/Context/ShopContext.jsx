import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

/* So here we will create one function that will create one empty cart 
  that will one object where our key values will be our product Id 
  and the product value will be quantity of product that we have added in the cart*/
const getDefaultCart = () => {
  let cart = {};

  /* Now will create number of key value pairs that will all_products length value.*/
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0; //here we pass i(index) to cart equals and initialize the Id zero.
  }
  return cart; //after running this for loop we will return our cart.
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = all_product.find(
  //         (product) => product.id === Number(item)
  //       );
  //       totalAmount += itemInfo.new_price * cartItems[item];
  //     }
  //     return totalAmount;
  //   }
  // };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemKey in cartItems) {
      const itemId = parseInt(itemKey); // Convert the key to a number
      if (cartItems[itemKey] > 0) {
        let itemInfo = all_product.find((product) => product.id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemKey];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
