import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../context/ShopContext";

const CartItem = ({ item }) => {

  const {cartItems,updatecartitemcount,addtocart,removefromcart}=useContext(ShopContext);
  console.log({ item });

  return (
    <div className="cart-item" key={item.id}>
      <div className="item-image">
        <img src={item.image} alt="image1"></img>
      </div>

      <div>
      <p className="item-title">{item.title}</p>
      
      <p className="item-price">Price: ${item.price}</p>
      <div className="countHandler">
        <button onClick={()=>addtocart(item.id)}>+</button>
        <input value={cartItems[item.id]} onChange={(e)=>updatecartitemcount(Number(e.target.value),item.id)}/>
        <button onClick={()=>removefromcart(item.id)}>-</button>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
