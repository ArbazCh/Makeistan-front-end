import React from "react";
import { Layout, SlideDrawer, Swiper } from "../../components";
import ProductList from "../ProductList";

const Home = () => {
  return (
    <Layout>
      {/* <SlideDrawer /> */}
      <Swiper />
      <ProductList />
    </Layout>
  );
};

export default Home;
