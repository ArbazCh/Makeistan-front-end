import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { clearCart, getCartTotal } from "../../redux/slices/cart";
import { CartItem, SlideDrawer } from "../../components";
// import { Navbar } from "../../components/navbar";
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // console.log("cart: ", cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <SlideDrawer />
      {/* <Navbar /> */}
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your Cart is Empty</p>
            <div cla ssName="start-shopping">
              <Link to="/">
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 class Name="product-title">
                Product
              </h3>
              <h3 className="price">Price</h3>
              <h3 className="Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>

            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => {
                return (
                  <div key={cartItem.id}>
                    <CartItem item={cartItem} />
                  </div>
                );
              })}
            </div>
            <div className="cart-summary">
              <button className="clear-cart" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal </span>
                  <span className="amount">PKR {cart.totalAmount}</span>
                </div>
                <p>Taxes and Shipping calculated at Checkout</p>
                <Link to="/checkout">
                  <button>Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
