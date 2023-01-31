import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getTotal, addToCart } from "../../redux/slices/cart";
import { fetchProduct } from "../../redux/slices/product/thunk";
import "./product.css";

export const Product = () => {
  let qty;
  const dispatch = useDispatch();
  const { id } = useParams();
  let { product, error, status } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(getTotal());
  }, [id] && [cart]);

  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [cart, dispatch]);

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
          <h1 className="product-title">{product[0]?.title}</h1>
          <div className="product-description">
            <p>{product[0]?.description}</p>
          </div>
          <div className="product-price-container">
            <p className="product-price">PKR {product[0]?.price}</p>
            <button
              className="add-to-cart"
              onClick={() => {
                addToCartHandler(product[0]);
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
