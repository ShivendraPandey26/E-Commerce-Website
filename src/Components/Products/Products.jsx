import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import AllProducts from "./AllProducts";
import useProduct from "../Context/ProductContext";

function Products() {
  const [allCategories, setAllCategories] = useState([]);
  const [clickProduct, setClickProduct] = useState("");
  const [productsItems, setProductsItems] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const { AddToCart } = useProduct();

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

  const handleClickCategory = (categoryId) => {
    setClickProduct(categoryId);
  };

  // function for fetch the clicked  product items
  useEffect(() => {
    const fetchClickProduct = async () => {
      try {
        if (clickProduct) {
          let response = await fetch(
            `https://dummyjson.com/products/category/${clickProduct}`
          );
          let productByCategory = await response.json();
          setProductsItems(productByCategory.products);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchClickProduct();
  }, [clickProduct]);

  // function for handle the  Search functionality
  const handleSearchUserInput = async () => {
    try {
      if (userInput) {
        let response = await fetch(
          `https://dummyjson.com/products/search?q=${userInput}`
        );
        let data = await response.json();
        if (data.products) {
          setSearchItems(data.products);
          // console.log(searchItems);
          setUserInput("");
        } else {
          setSearchItems([]);
          setUserInput("");
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Layout>
      <div className="bg-[#eaf5f5]">
        <div className="w-full h-20 flex items-center justify-around flex-wrap bg-blue-300 mb-5">
          <div className="ml-10">
            <input
              type="search"
              className="w-52 h-9 rounded-s-lg p-5"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchUserInput();
                }
              }}
            />
            <button
              type="button"
              className="w-24 h-10 bg-orange-600 text-white text-lg font-semibold rounded-e-lg hover:bg-orange-700"
              onClick={handleSearchUserInput}
            >
              Search
            </button>
          </div>
          <div className="">
            <select
              className="bg-[#eaf5f5] text-center w-56 h-7 rounded-lg capitalize"
              onChange={(event) => handleClickCategory(event.target.value)}
            >
              <option disabled selected>
                Select Category
              </option>
              {allCategories.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-screen h-auto flex justify-between">
          {/* Render search results if available */}
          <div>
            {searchItems.length > 0 && (
              <div>
                <h2 className="text-4xl font-semibold mb-10 text-[#31587c] font-sans text-center tracking-widest">
                  Search Products
                </h2>

                <div className="w-full h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 flex-wrap">
                  {searchItems.map((item, index) => (
                    <div key={index}>
                      <Card
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.thumbnail}
                        btn={"Add To Cart"}
                        DiscountPercentage={item.discountPercentage}
                        AddToCartCard={() => {
                          AddToCart(item);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h1
              className={`text-4xl font-semibold mb-10 text-[#31587c] font-sans text-center tracking-widest capitalize ${
                clickProduct === "" ? "hidden" : "block"
              }`}
            >
              {clickProduct}
            </h1>
            <div className="w-full h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 mb-15 flex-wrap ">
              {productsItems.map((item, index) => (
                <div key={index}>
                  <Card
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.thumbnail}
                    btn={"Add To  Cart"}
                    DiscountPercentage={item.discountPercentage}
                    AddToCartCard={() => {
                      AddToCart(item);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <AllProducts />
      </div>
    </Layout>
  );
}

export default Products;
