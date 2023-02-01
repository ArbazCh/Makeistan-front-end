import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import postOrderService from "../../services/order.service";
import "./checkout.css";
import { OrderSummary } from "../../components/orderSummary";
import { getTotal } from "../../redux/slices/cart";

export const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  //   let delivery = 300;
  const cart = useSelector((state) => state.cart);
  //   console.log("In checkout", cart);
  const quantity = cart.cartItems[0].quantity;
  const totalAmount = cart.totalAmount;

  const PlaceOrderHandler = async () => {
    try {
      let response = await postOrderService(quantity, totalAmount);
      response = await response.data;
      if (response.body) {
        // localStorage.removeItem("cartItems");
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
    <div>
      <OrderSummary cart={cart} />
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
