import React from "react";
import Layout from "../Layout/Layout";
import ImageSlider from "./ImageSlider";
import FourDiv from "./FourDiv";
import PopularProducts from "./PopularProducts";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Layout>
        {/* Home page start */}
        <div className="bg-[#eaf5f5]">
          <ImageSlider />
          <FourDiv />
          <PopularProducts />
          <Gallery />
          <Testimonials />
        </div>
      </Layout>
    </>
  );
}

export default Home;
