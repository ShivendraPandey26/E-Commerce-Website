import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import useProduct from "../Context/ProductContext";


function PopularProducts() {
  
  const [products, setProducts] = useState([]);
  const { cartProduct, AddToCart } = useProduct();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products?limit=10&skip=30&select=title,price,thumbnail,rating,discountPercentage,brand,description  ");
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
    <div className="p-3">
      <h2 className="text-4xl font-semibold mb-20 text-[#31587c] font-sans tracking-widest text-center">
      Best Sellers
      </h2>

      <div className="w-screen h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 mb-15 flex-wrap ">

        {products.map((item, index) => (
          <Card
          id={item.id}
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
    </div>
  );
}

export default PopularProducts;
