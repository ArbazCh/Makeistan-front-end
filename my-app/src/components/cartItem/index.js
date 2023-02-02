import React from "react";
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
} from "../../redux/slices/cart";
import "./cartItem.css";

export const CartItem = (product) => {
  const cartItem = product.item;
  //   const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleReomveCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="cart-items">
        {/* {cart.cartItems?.map((cartItem) => ( */}
        <div className="cart-item" key={cartItem?.id}>
          <div className="cart-product">
            {/* <img src={cartItem.images[1]} alt={cartItem.title} /> */}
            <div>
              <h3>{cartItem?.title}</h3>
              <p>{cartItem?.description}</p>
              <button onClick={() => handleReomveCart(cartItem)}>Remove</button>
            </div>
          </div>
          <div className="cart-product-price">PKR {cartItem?.price}</div>
          <div className="cart-product-quantity">
            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
            <div className="count">{cartItem?.quantity}</div>
            <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
          </div>
          <div className="cart-product-total-price">
            PKR {cartItem?.quantity * cartItem?.price}
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};
