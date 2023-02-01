import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/slices/cart";
import { addToCart } from "../../redux/slices/cart";
import "./product.css";

export const Product = (item) => {
  const product = item.product;
  // console.log("product: ", product);
  const dispatch = useDispatch();
  let qty;
  const cart = useSelector((state) => state.cart);

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
        {/* <button className="cart-icon">Cart {cart.totalItems}</button> */}
      </Link>
      <Link to={`/products/${product?.id}`}>
        <div className="product-container">
          <div className="product-left">
            {/* <img
              src={product?.images[0]}
              alt={product?.title}
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
            </div>
          </div>
        </div>
      </Link>
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
