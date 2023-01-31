import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../.././redux/slices/allproducts";

export const AllProduct = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );
  //   console.log("data", products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      {products.map((item) => (
        <div className="card">
          <img src={item.images[0]} alt="Denim Jeans" />
          <h1>{item?.title}</h1>
          <p class="price">{item?.price}</p>
          <p>{item?.description}</p>
        </div>
      ))}
    </>
  );
};
