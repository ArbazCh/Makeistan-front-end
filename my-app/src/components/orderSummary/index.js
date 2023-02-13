import React from "react";
// import { useSelector } from "react-redux";

const OrderSummary = (cart) => {
  const { totalAmount, totalItems, deliveryCharge } = cart.cart;
  // const { user } = useSelector((state) => state);
  const name = localStorage.getItem("userName");
  const address = localStorage.getItem("userAddress");

  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="user">
          <h3>Customer Name: {name}</h3>
          <h3>Shipping Address: {address}</h3>
        </div>
        <h3 className="items-summary">
          {totalItems} item(s) Selected: Price {totalAmount} PKR
        </h3>
        <h3 className="delivery-summary">
          Delivery Cost: {deliveryCharge} PKR
        </h3>
        <h2 className="grand-total">
          Grand Total: {totalAmount + deliveryCharge} PKR
        </h2>
      </div>
    </div>
  );
};
export default OrderSummary;
