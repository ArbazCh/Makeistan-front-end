import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/slices/cart";
import { addToCart } from "../../redux/slices/cart";
import "./product.css";

export const Product = (item) => {
  const product = item.product;
  // console.log(product);
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
    let totalPrice = qty * product.unitPrice;
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
      <Link to={`/products/${product?.productId}`}>
        <div className="product-container">
          <div className="product-left">
            <img
              src={product?.image} //"https://i.dummyjson.com/data/products/1/1.jpg" //
              alt={product?.name}
              className="product-image"
            />
          </div>
          <div className="product-right">
            <h1 className="product-title">{product?.name}</h1>
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
              <p className="product-price">PKR {product?.unitPrice}</p>
            </div>
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
      </Link>
    </>
  );
};
