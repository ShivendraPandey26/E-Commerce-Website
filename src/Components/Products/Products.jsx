import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import AllProducts from "./AllProducts";

function Products() {
  const [allCategories, setAllCategories] = useState([]);
  const [clickProduct, setClickProduct] = useState("");
  const [productsIteams, setProductsIteams] = useState([]);

  // url of categories = https://dummyjson.com/products/categories *********************************************************************************************************
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products/categories");
        let data = await response.json();
        setAllCategories(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);
  // console.log(allCategories);

  const handleClickCategory = (categoryId) => {
    setClickProduct(categoryId);
    // console.log(categoryId);
  };

  // url of  products by category = https://dummyjson.com/products/category/smartphones***********************************************************************************************
  useEffect(() => {
    const fetchClickProduct = async () => {
      try {
        if (clickProduct) {
          let response = await fetch(
            `https://dummyjson.com/products/category/${clickProduct}`
          );
          let productByCategory = await response.json();
          setProductsIteams(productByCategory.products);
          // console.log(productByCategory.products);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchClickProduct();
  }, [clickProduct]);

  return (
    <Layout>
      <div className="bg-[#eaf5f5]">
        {/* product Navbar section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="w-screen h-10 border-2 flex items-center justify-between bg-blue-300 mb-20">
          <div className="lg:w-[50vw] ml-10">
            <input type="search" className="h-9 w-[30%] rounded-lg" />
            <button
              type="button"
              className="w-24 h-8 bg-orange-600 text-white text-lg font-semibold rounded-lg mx-3 hover:bg-orange-700 "
            >
              Search
            </button>
          </div>

          <div>
            {/* Map through the array of categories and create a button for each one */}

            {/* allCategories section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=++++++++++++++++++++++++++++++ */}
            <div className="lg:w-[50vw]">
              <select
                className="bg-[#eaf5f5] text-center h-7 w-[40%] ml-44 rounded-lg capitalize"
                onChange={(event) => handleClickCategory(event.target.value)}
              >
                <option disabled selected>
                  Select Category
                </option>
                {allCategories.map((item, index) => (
                  <option 
                  value={item} 
                  key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* clicked product section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= */}

        <div>
          {/* Hidden selected products heading when no category selected */}
          <h1
            className={`text-5xl text-center font-semibold mb-10 text-[#31587c] font-serif underline underline-offset-[15px] capitalize ${
              clickProduct === "" ? "hidden" : "block"
            }`}
          >
            {clickProduct}
          </h1>

          <div className="w-screen h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 mb-15 flex-wrap ">
            {productsIteams.map((item, index) => (
              <div key={index}>
                <Card
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.thumbnail}
                  btn={"Add To  Cart"}
                  DiscountPercentage={item.discountPercentage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* All products Section Starts Here +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}

        <AllProducts />
      </div>
    </Layout>
  );
}

export default Products;
