import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";
import { OrderSummary } from "../../components/orderSummary";
import { getCartTotal } from "../../redux/slices/cart";
import { postOrder } from "../../redux/slices/order/thunk";
import { Navbar } from "../../components/navbar";
export const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart);
  const { error, loading } = useSelector((state) => state.order);
  const quantity = cart.totalItems;
  const totalAmount = cart.totalAmount + cart.deliveryCharge;

  const PlaceOrderHandler = async () => {
    dispatch(postOrder({ quantity, totalAmount }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Navbar />
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

// try {
//   let response = await postOrderService(quantity, totalAmount);
//   response = await response.data;

//   if (response.body) {
//     localStorage.removeItem("cartItems");
//     toast.success("Your order has been placed. Thank you for Shoping.", {
//       position: "top-center",
//     });
//   } else {
//     toast.success("Your order has been placed. Thank you for Shoping.", {
//       position: "top-center",
//     });
//     //Navigate to Error Page for Try Again
//   }
// } catch (err) {
//   console.error(err.message);
// }
