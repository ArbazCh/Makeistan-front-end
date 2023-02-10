import React, { useEffect } from "react";
import { Grid, Skeleton } from "@mui/material";
import { addToCart, getCartTotal } from "../../redux/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  let qty = 1;
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const addToCartHandler = (product) => {
    let totalPrice = product.unitPrice;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };

  return (
    <>
      <Grid item lg={3} sm={4} md={6} xs={12}>
        <div className="card-inner">
          <Link to={`products/${item?.productId}`}>
            <div className="image-wrap">
              {item ? (
                <img
                  src={item?.image}
                  alt=""
                  style={{ width: "100%", height: "15rem" }}
                  loading="lazy"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={118}
                />
              )}
              <div className="image-over"></div>
            </div>
          </Link>
          <div className="product-grid__content">
            <div className="title">
              <a className="card-description">{item?.name}</a>

              <button
                className="add-to-cart"
                onClick={() => {
                  addToCartHandler(item);
                }}
              >
                {" "}
                Add to Cart
              </button>
            </div>
            <div className="price">
              <h3 className="main-price discounted">PKR {item?.unitPrice}</h3>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Card;
