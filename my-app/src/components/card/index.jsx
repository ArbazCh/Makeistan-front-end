import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";
import productimage from "../images/imagep.jpg";

const Card = () => {
  return (
    <>
      <Grid item xs={12} container spacing={2}>
        <Grid item lg={3} sm={4} md={6} xs={12}>
          <div className="card-outer">
            <div className="card-inner">
              <div className="image-wrap">
                <img src={productimage} alt="" />
                <div className="image-over"></div>
              </div>
              <div className="product-grid__content">
                <div className="title">
                  <h3>
                    <a >
                      Lorem ipsum decor one
                    </a>
                  </h3>
                  <button>add to cart</button>
                  
                </div>
                <div className="price">
                  <span className="main-price discounted">$17.00</span>
                  <span className="discounted-price">$15.30</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
