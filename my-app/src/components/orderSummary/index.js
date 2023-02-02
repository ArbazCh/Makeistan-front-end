import React from "react";

export const OrderSummary = (cart) => {
  const { totalAmount, totalItems } = cart.cart;
  let delivery = 300;
  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <h3 className="items-summary">
          Select {totalItems} item(s) Price {totalAmount} PKR
        </h3>
        <h3 className="delivery-summary">Delivery Cost {delivery} PKR</h3>
        <h2 className="grand-total">
          Grand Total {totalAmount + delivery} PKR
        </h2>
      </div>
    </div>
  );
};
