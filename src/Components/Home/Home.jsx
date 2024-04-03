import React from "react";
import Layout from "../Layout/Layout";
// import ImageSlider from "./ImageSlider";
import FourDiv from "./FourDiv";
import PopularProducts from "./PopularProducts";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Layout>
        {/* Home page */}
        <div className="bg-[#eaf5f5]">
          {/* <ImageSlider /> */}
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_640.jpg"
              alt="header image"
              className="max-w-full max-h-full w-screen h-[87vh]"
            />
          </div>
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
