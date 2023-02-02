import React from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import "./checkout.css";

export const Checkout = () => {
  let delivery = 300;
  const cart = useSelector((state) => state.cart);
=======

export const OrderSummary = (cart) => {
  const { totalAmount, totalItems } = cart.cart;
  let delivery = 300;
>>>>>>> 0eb3a4fb083303a4fda9a090a49062b692f4f7c5
  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <h3 className="items-summary">
<<<<<<< HEAD
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
=======
          Select {totalItems} item(s) Price {totalAmount} PKR
        </h3>
        <h3 className="delivery-summary">Delivery Cost {delivery} PKR</h3>
        <h2 className="grand-total">
          Grand Total {totalAmount + delivery} PKR
        </h2>
      </div>
>>>>>>> 0eb3a4fb083303a4fda9a090a49062b692f4f7c5
    </div>
  );
};
