import React from "react";

export const OrderSummary = (cart) => {
  const { totalAmount, totalItems, deliveryCharge } = cart.cart;

  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
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
