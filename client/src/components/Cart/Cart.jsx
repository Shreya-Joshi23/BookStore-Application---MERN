import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { gettotalamount, book, isLoading, cartItems } = useContext(ShopContext);

//   console.log(items);
  const nav=useNavigate();

  const totalamount=gettotalamount();

  if (isLoading) {
    return <p>Loading cart items...</p>; // Placeholder for loading state
  }

  return (
    <div className="cart-container">
      <div className="name">
        <h1>Your cart items</h1>
      </div>
      <div className="cart-items">
        {book.map((item) => {
          if (cartItems[item.id] !== 0) {
            console.log(cartItems[item.id]);
            console.log(item);
            return <CartItem item={item} key={item.id}/>;
          }
          return null;
        })}
      </div>

     { (totalamount>0)?(
     <div className="checkout">
        <p>Subtotal:${totalamount}</p>
        <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200" onClick={()=>nav('/')}>Continue Shopping</button>
      </div>
     ):(
        <h1 className="noitem">No items added to cart</h1>
      )}
      
    </div>
  );
};

export default Cart;
