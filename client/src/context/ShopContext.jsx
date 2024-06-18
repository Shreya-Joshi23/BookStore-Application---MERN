import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

// {
// id:count
//     1:0,
//     2:0,
//     3:0
//     .
//     .
//     .
// }

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 11; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  });
  const [book, setbook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const getBook=async ()=>{
      try{
       const res=await axios.get("http://localhost:4000/book");
       console.log(res.data.data);
       setbook(res.data.data);
      //  console.log(book);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);

  useEffect(() => {
    console.log("Updating localStorage with cartItems", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log(cartItems);

  const gettotalamount = () => {
    let total = 0;
    book.forEach((item) => {
      if (cartItems[item.id] > 0) {
        const itemPrice = item.price === "free" ? 0 : parseFloat(item.price);
        total += cartItems[item.id] * itemPrice;
      }
    });
    return total;
  };


  const addtocart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };

  const removefromcart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const updatecartitemcount=(newcount,Itemid)=>{
    setCartItems((prev)=>({...prev,[Itemid]:newcount}))
  }

  const contextValue = {book,isLoading,cartItems,gettotalamount,updatecartitemcount, addtocart, removefromcart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;