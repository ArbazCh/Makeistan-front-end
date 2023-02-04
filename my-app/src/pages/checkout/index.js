import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import postOrderService from "../../services/order.service";
import "./checkout.css";
import { OrderSummary } from "../../components/orderSummary";
import { getCartTotal } from "../../redux/slices/cart";

export const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart);
  const quantity = cart.totalItems;
  const totalAmount = cart.totalAmount;

  const PlaceOrderHandler = async () => {
    try {
      let response = await postOrderService(quantity, totalAmount);
      response = await response.data;
      if (response.body) {
        alert("Your Order has been Placed");
        localStorage.removeItem("cartItems");
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
