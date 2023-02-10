import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "../../redux/slices/allproducts/thunk";
import "./style.css";
import { Grid } from "@mui/material";
import Spinner from "../../assets/images/loadingspinner.svg";
import { Card } from "../../components";
const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  if (loading)
    return <img src={Spinner} style={{ position: "absolute", left: "50%" }} />;
  if (error) return <p>Error...</p>;

  return (
    <div
      style={{
        // minHeight: "100vh",
        height: "auto",
        marginLeft: "2rem",
        marginRight: "2rem",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <Grid item xs={12} container spacing={2}>
        {products.map((item) => (
          <Card item={item} />
        ))}
      </Grid>
    </div>
  );
};
export default ProductList;
