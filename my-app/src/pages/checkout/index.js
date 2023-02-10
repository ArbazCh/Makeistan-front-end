import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";
import { getCartTotal } from "../../redux/slices/cart";
import { postOrder } from "../../redux/slices/order/thunk";
// import { Navbar } from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { OrderSummary, SlideDrawer } from "../../components";

export const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart);
  const { error, loading } = useSelector((state) => state.order);
  const quantity = cart.totalItems;
  const totalAmount = cart.totalAmount + cart.deliveryCharge;
  const navigate = useNavigate();

  const PlaceOrderHandler = async () => {
    const response = await dispatch(postOrder({ quantity, totalAmount }));
    const { status } = response.payload;
    if (status === 200) navigate("/");
    if (status === 401) navigate("/login");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <SlideDrawer />
      {/* <Navbar /> */}
      <div className="Checkout">
        <OrderSummary cart={cart} />
        <div className="confirm-container">
          <button
            className="confirm-order"
            onClick={() => PlaceOrderHandler(cart)}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
