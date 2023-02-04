import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./cartItem.css";
import {
  removeFromCart,
  toggleCartQty,
  getCartTotal,
} from "../../redux/slices/cart";

export const CartItem = (product) => {
  const cartItem = product.item;
  const dispatch = useDispatch();

  const handleReomveCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseCart = () => {
    dispatch(
      toggleCartQty({
        id: cartItem?.id,
        type: "INC",
      })
    );
  };
  const handledecreaseCart = () => {
    dispatch(
      toggleCartQty({
        id: cartItem.id,
        type: "DEC",
      })
    );
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <>
      <div className="cart-items">
        <div className="cart-item" key={cartItem?.id}>
          <div className="cart-product">
            <img src={cartItem.images[1]} alt={cartItem.title} />
            <div>
              <h3>{cartItem?.title}</h3>
              <p>{cartItem?.description}</p>
              <button onClick={() => handleReomveCart(cartItem)}>Remove</button>
            </div>
          </div>
          <div className="cart-product-price">PKR {cartItem?.price}</div>
          <div className="cart-product-quantity">
            <button
              onClick={() => {
                handledecreaseCart();
              }}
            >
              -
            </button>
            <div className="count">{cartItem?.quantity}</div>
            <button
              onClick={() => {
                handleIncreaseCart();
              }}
            >
              +
            </button>
          </div>
          <div className="cart-product-total-price">
            PKR {cartItem?.totalPrice}
          </div>
        </div>
      </div>
    </>
  );
};
