import React from "react";
import { useSelector } from "react-redux";
import "./checkout.css";

export const Checkout = () => {
  let delivery = 300;
  const cart = useSelector((state) => state.cart);
  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <h3 className="items-summary">
          Select {cart?.totalItems} item(s) Price {cart?.totalAmount} PKR
        </h3>
        <h3 className="delivery-summary">Delivery Cost {delivery} PKR</h3>
        <h2 className="grand-total">
          Grand Total {cart?.totalAmount + delivery} PKR
        </h2>
      </div>
      <button
        className="confirm-order"
        onClick={() => alert("Your order has been placed")}
      >
        Confirm Order
      </button>
    </div>
  );
};
