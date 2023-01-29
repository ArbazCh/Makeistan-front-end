import React from "react";
import { useSelector } from "react-redux";
import "./checkout.css";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoiYXJiYXpjaDEzMTNAZ21haWwuY29tIiwiaWF0IjoxNjc0OTE3MjczfQ.-_NHk39rqYDgsgQjPCo8VwRtaMpDJWJjeqGVln5TPok";

export const Checkout = () => {
  let delivery = 300;
  const cart = useSelector((state) => state.cart);
  // console.log("cart: ", cart);
  //console.log(cart.cartItems[0].id, cart.cartItems[0].quantity);
  const PlaceOrderHandler = async (cart) => {
    try {
      // console.log("I clicked");
      const data = await fetch(
        "http://localhost:3000/api/customer/orders/create",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            paymentId: "1",
            date: "2020-03-12",
            orderStatus: "pending",
            productId: "3",
            sellerId: 3,
            orderNumber: "1234567",
            quantity: `${cart.cartItems[0].quantity}`,
            totalPrice: `${cart.totalAmount}`,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await data.json();
      // console.log("Response", response.body);
      if (response.body) {
        localStorage.removeItem("cartItems");
      } else {
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
