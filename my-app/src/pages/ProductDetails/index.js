import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getTotal, addToCart } from "../../redux/slices/cart";
import { fetchProduct } from "../../redux/slices/product/thunk";
import "../../components/product/product.css";
import { Product } from "../../components/product";
// import AddToCartButton from "../../cartButton";

export const ProductDetails = () => {
  let qty;
  const dispatch = useDispatch();
  const { id } = useParams();

  // eslint-disable-next-line
  let { product, error, status } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

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

  // if (status) return <p> Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  return (
    <>
      <Link to="/cart">
        <button className="cart-icon">Cart {cart.totalItems}</button>
      </Link>
      <Product product={product} />

      {/* <AddToCartButton product={product[0]} /> */}

      <button
        className="add-to-cart"
        onClick={() => {
          addToCartHandler(product);
        }}
      >
        Add to Cart
      </button>
    </>
  );
};

//   useEffect(() => {
//     // dispatch(fetchProduct(id));
//     dispatch(getTotal());
//   }, []);
/* <div className="product-container">
          <div className="product-left">
            <img
              src={product[0]?.images[0]}
              alt={product[0]?.title}
              className="product-image"
            />
          </div>
          <div className="product-right">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-description">
              <p>{product[0]?.description}</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">PKR {product[0]?.price}</p> */
