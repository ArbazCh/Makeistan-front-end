import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal, addToCart } from "../../redux/slices/cart";
import { fetchProduct } from "../../redux/slices/product";
import "./product.css";

export const Product = () => {
  const product = useSelector((state) => state.product.data);
  const cart = useSelector((state) => state.cart);
  let qty;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const addToCartHandler = (product) => {
    const tempProduct = {
      ...product,
      quantity: qty,
    };
    dispatch(addToCart(tempProduct));
  };

  return (
    <>
      <Link to="/cart">
        <button className="cart-icon">Cart {cart.totalItems}</button>
      </Link>

      <div className="product-container">
        <div className="product-left">
          {/* <img
            src={product.images[0]}
            alt={product.title}
            className="product-image"
          /> */}
        </div>
        <div className="product-right">
          <h1 className="product-title">{product?.title}</h1>
          <div className="product-description">
            <p>{product?.description}</p>
          </div>
          <div className="product-price-container">
            <p className="product-price">PKR {product?.price}</p>
            <button
              className="add-to-cart"
              onClick={() => {
                addToCartHandler(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
