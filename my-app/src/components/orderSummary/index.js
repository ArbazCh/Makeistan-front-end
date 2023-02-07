import React from "react";

export const OrderSummary = (cart) => {
<<<<<<< HEAD
  const { totalAmount, totalItems } = cart.cart;
  let delivery = 300;
=======
  const { totalAmount, totalItems, deliveryCharge } = cart.cart;

>>>>>>> a079733ed29708bfbda705751265a173e99bc7d1
  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <h3 className="items-summary">
<<<<<<< HEAD
          Select {totalItems} item(s) Price {totalAmount} PKR
        </h3>
        <h3 className="delivery-summary">Delivery Cost {delivery} PKR</h3>
        <h2 className="grand-total">
          Grand Total {totalAmount + delivery} PKR
=======
          {totalItems} item(s) Selected: Price {totalAmount} PKR
        </h3>
        <h3 className="delivery-summary">
          Delivery Cost: {deliveryCharge} PKR
        </h3>
        <h2 className="grand-total">
          Grand Total: {totalAmount + deliveryCharge} PKR
>>>>>>> a079733ed29708bfbda705751265a173e99bc7d1
        </h2>
      </div>
    </div>
  );
};
