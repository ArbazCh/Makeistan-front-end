import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/slices/cart";
import { addToCart } from "../../redux/slices/cart";
import "./product.css";

export const Product = (item) => {
  const product = item.product;
  const cart = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    setQty(1);
  };

  return (
    <>
      <Link to={`/products/${product?.id}`}>
        <div className="product-container">
          <div className="product-left">
            <img
              src="https://i.dummyjson.com/data/products/1/1.jpg" //{product?.images[1]}
              alt={product?.title}
              className="product-image"
            />
            {
              // console.log(
              // "Images: ",
              // product?.images[0])
              // console.log("Count: ", product.id)
            }
          </div>
          <div className="product-right">
            <h1 className="product-title">{product?.title}</h1>
            <div className="product-description">
              <p>{product?.description}</p>
              <button
                onClick={() => {
                  increaseQty();
                }}
              >
                +
              </button>
              <span> {qty} </span>
              <button
                onClick={() => {
                  decreaseQty();
                }}
              >
                -
              </button>
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
