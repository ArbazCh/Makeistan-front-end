import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetcAllData } from "../../redux/slices/allproducts/thunk";
import { Navbar } from "../../components/navbar";
import { Product } from "../../components/product";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );
  useEffect(() => {
    dispatch(fetcAllData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Navbar />
      {products.map((item) => (
        <div key={item.id}>
          <Product product={item} />
        </div>
      ))}
    </>
  );
};