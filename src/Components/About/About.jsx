import React from "react";
import Layout from "../Layout/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-[#eaf5f5]">
        <div className="container h-full w-screen mx-auto p-8 text-center">
          <h2 className="text-5xl font-semibold mb-10 text-[#31587c] font-serif">
            About Us
          </h2>
          <p className="text-lg text-[#32597d] font-sans mb-4 leading-relaxed w-1/2 mx-auto">
            Welcome to our e-commerce store! We are a family-owned business that
            has been selling home decor items for over 20 years. Our passion for
            unique and beautiful items has led us to create this online store,
            where we can share our collection with a wider audience.
          </p>
          <h2 className="text-left text-2xl font-serif font-bold text-orange-600 my-10">Our Story</h2>

          <div className="lg:flex mb-10">

          <div>
          <img src="./src/assets/about-01.jpg" alt="about image" height= {300} />
          </div>

          <p className="text-xl text-[#32597d] font-medium mb-9 p-5 text-start leading-relaxed">
            We believe that every home should be a reflection of the people who
            live there. That's why we offer a diverse range of products, from
            vintage furniture to modern art prints, that cater to all styles and
            budgets. Our products are carefully curated to ensure that they are
            of the highest quality and meet our customers' expectations.
          </p>

          </div>

          <div className="lg:flex mb-10">

          <p className="text-xl text-[#32597d] font-medium mb-9 p-5 text-start leading-relaxed">
            We pride ourselves on our excellent customer service and are
            committed to making every shopping experience a positive one. Our
            team is always available to answer any questions you may have and to
            help you find the perfect item for your home.
          </p>

          <div>
          <img src="./src/assets/about-02.jpg" alt="about image" height= {300} />
          </div>

          </div>


          <p className="text-xl text-[#32597d] font-medium p-5 leading-relaxed">
            Thank you for choosing our e-commerce store. We hope you enjoy
            browsing our collection and find the perfect item to add to your
            home.
          </p>
          <p className="text-xl text-[#32597d] font-medium mb-9 p-5 leading-relaxed">
            - The Team at <span className="text-xl font-semibold text-blue-600">
              <span className="text-2xl font-semibold text-orange-600">
                Snap
              </span>
              Shop
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
