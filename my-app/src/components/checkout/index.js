import React from "react";
import { useSelector } from "react-redux";

import postOrderService from "../../services/order.service";
import "./checkout.css";
export const Checkout = () => {
  let delivery = 300;
  const cart = useSelector((state) => state.cart);
  const quantity = cart.cartItems[0].quantity;
  const totalAmount = cart.totalAmount;

  const PlaceOrderHandler = async (cart) => {
    try {
      let response = await postOrderService(quantity, totalAmount);
      response = await response.data;
      if (response.body) {
        localStorage.removeItem("cartItems");
        alert("Your Order has been Placed");
      } else {
        alert("Something went wrong, Please try again later");
        //Navigate to Error Page for Try Again
      }
    } catch (err) {
      console.error(err.message);
    }
  };

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
      <button className="confirm-order" onClick={() => PlaceOrderHandler(cart)}>
        Place Order
      </button>
    </div>
  );
};

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
