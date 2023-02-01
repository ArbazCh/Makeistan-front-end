import React from "react";
// eslint-disable-next-line
// import { useSelector } from "react-redux";
// import postOrderService from "../../services/order.service";
// import "./checkout.css";

export const OrderSummary = (cart) => {
  console.log("C:", cart);
  const { totalAmount, totalItems, cartItems } = cart.cart;
  console.log("In the summary", totalAmount, totalItems, cartItems);
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
{
  /* <h1>{cartItems[0].title}</h1> */
}
// import axios from "axios";
// import API from "../../../src/api/axios.config";

// const data =
// await API.post("/create", {
//   paymentId: "1",
//   date: "2020-03-12",
//   orderStatus: "pending",
//   productId: "3",
//   sellerId: 3,
//   orderNumber: "1234567",
//   quantity: `${cart.cartItems[0].quantity}`,
//   totalPrice: `${cart.totalAmount}`,
// });
// const response = await data.json();

// {
//   method: "POST",
//   mode: "cors",
//   body: JSON.stringify({
//     paymentId: "1",
//     date: "2020-03-12",
//     orderStatus: "pending",
//     productId: "3",
//     sellerId: 3,
//     orderNumber: "1234567",
//     quantity: `${cart.cartItems[0].quantity}`,
//     totalPrice: `${cart.totalAmount}`,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//     authorization: `Bearer ${token}`,
//   },
// }
