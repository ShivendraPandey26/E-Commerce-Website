import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProduct from "../Context/ProductContext";
import Layout from "../Layout/Layout";

function CartSection() {
  const { setCartProduct, cartProduct, addToCart } = useProduct();


  return (
    <Layout>
      
      <div className="bg-[#dbecec] h-full">
        <div className="pb-20"></div>

        {/* cart section start++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* product card section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="w-[90%] h-auto mx-auto mb-10 bg-transparent rounded-xl shadow-2xl shadow-gray-500">
          <div className="h-[14%]">
            <h1 className="text-2xl uppercase font-serif font-extrabold tracking-[0.4rem] p-6 text-[#32597d]">
              my bag
            </h1>
            <hr className="border-b border-gray-400" />
          </div>

          <div className="w-full h-[76%] overflow-y-scroll no-scrollbar">
            {/* <ProductCard /> */}

            {cartProduct.map((item, index) => (
              <ProductCard
              key={index} 
              image= {item.thumbnail}
              brandName={item.brand}
              price={item.price+".00"}
              title={item.title}
              description={item.description}
              rating={item.rating}
              quantity={item.quantity}
               />
            ))}
            
          </div>

          <div className="flex items-center justify-end w-full h-[10%] lg:ps-[45%] border-t-2 border-gray-400">
            {/* <img
              src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"
              alt="scrollbar img"
              className="relative lg:bottom-9 lg:left-[0.1rem] md:bottom-8 sm:bottom-9 sm:left-20 bottom-9 left-20"
            /> */}
            <h1 className="text-[#32597d] capitalize font-serif lg:text-2xl md:text-xl sm:text-xl text-[0.8rem] font-extrabold tracking-widest m-8">
              sub - total
            </h1>
            <h1 className="text-[#32597d] capitalize font-serif lg:text-2xl md:text-xl sm:text-xl text-[0.8rem] font-extrabold tracking-widest m-8">
            <span className="text-2xl relative top-1">₹</span>{'price'}
            </h1>
          </div>
        </div>

        {/* total section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="lg:w-[35%] md:w-1/2 sm:w-3/4 w-11/12 h-auto lg:ms-[60%] md:ms-[60%] sm:mx-auto mx-auto bg-transparent rounded-lg shadow-2xl shadow-gray-700">
          <div className="w-full h-auto">
            <h1 className="capitalize text-2xl font-serif font-bold p-5 text-[#32597d]">
              cart total
            </h1>
            <hr className="border border-gray-400 w-[100%]" />

            <div className="flex items-center justify-between p-4">
              <h1 className="text-[#32597d] text-lg font-semibold">Total items</h1>
              <p className="text-[#305980] text-xl">{cartProduct.length}</p>
            </div>

            <div className="flex items-center justify-between px-4">
              <h1 className="text-[#32597d] text-lg font-semibold">Sub-total</h1>
              <p className="text-[#305980] text-xl">₹999.00</p>
            </div>

            <div className="flex items-center justify-between p-5">
              <h1 className="text-[#32597d] text-lg font-semibold">Promo code</h1>
              <input
                type="text"
                placeholder="Enter promocode"
                className="p-2 rounded-md"
              />
            </div>


            <div className="flex items-center justify-center p-5 border-t border-b border-gray-400">
            <button className="w-[80%] h-12 bg-orange-500 hover:bg-orange-600 rounded-3xl text-2xl text-white">Apply</button>
            </div>


            <div className="flex items-center justify-between p-5">
              <h1 className="capitalize text-2xl font-serif font-bold text-[#32597d]">Total Cost</h1>
              <h1 className="capitalize text-2xl font-serif font-bold text-[#32597d]"><span className="text-2xl relative top-1">₹</span>999.00</h1>
            </div>


          </div>
        </div>

        <div className="p-5"></div>
      </div>
    </Layout>
  );
}

export default CartSection;
