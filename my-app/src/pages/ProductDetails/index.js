import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/slices/product/thunk";
import "../../components/product/product.css";
import { Product } from "../../components/product";
import { Navbar } from "../../components/navbar";
import SideDrawer from "../../components/slidedrawer"

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let { product, error, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <Navbar /> */}
      <SideDrawer />
      <Product product={product} />
    </>
  );
};
