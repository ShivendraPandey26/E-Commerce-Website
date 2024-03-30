import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import useProduct from "../Context/ProductContext";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const { AddToCart } = useProduct();

  // url of All  Products API = https://dummyjson.com/products        ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setProducts(data.products);
        // console.log(data.products);
      } catch (error) {
        console.log("Error", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <>
      <h2 className="text-5xl text-center font-semibold mb-10 text-[#31587c] font-serif underline underline-offset-8">
        All  Products
      </h2>

      <div className="w-screen h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 mb-15 flex-wrap ">
        {products.map((item, index) => (
            
          <Card
            key={index}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.thumbnail}
            btn={'Add To  Cart'}
            DiscountPercentage={item.discountPercentage}
            brandName={item.brand}
            AddToCartCard ={()=>{AddToCart(item)}}
          />
       
        ))}
      </div>
    </>
  );
}

export default AllProducts;
