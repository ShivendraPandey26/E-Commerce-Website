import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function CartSection() {
  return (
    <div className="bg-[#dbecec]">
      {/* close  button section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="fixed right-5 top-5 bg-white rounded-full shadow-2xl hover:scale-110 duration-300 transition">
        <Link to="/products">
          <IoMdClose size={35} />
        </Link>
      </div>

      {/* cart section start++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="w-screen h-screen flex items-center justify-around">
        {/* product card section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="w-[60%] h-[90%] bg-white rounded-xl shadow-2xl shadow-gray-500">
          <div className="h-[14%]">
            <h1 className="text-2xl uppercase font-serif font-extrabold tracking-[0.4rem] p-6">
              my bag
            </h1>
            <hr className="border-b border-gray-200" />
          </div>

          <div className="w-full h-[76%] overflow-y-scroll no-scrollbar">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="flex w-full h-[10%] lg:ps-[45%] border-t-2">
            <img
              src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"
              alt="scrollbar img"
              className="relative lg:bottom-9 lg:left-[0.1rem] md:bottom-8 sm:bottom-9 sm:left-20 bottom-9 left-20"
            />
            <h1 className="lg:text-xl md:text-xl sm:text-xl text-[0.8rem] uppercase font-serif font-extrabold tracking-widest lg:m-6 my-5">
              sub - total
            </h1>
            <h1 className="lg:text-xl md:text-xl sm:text-xl text-[0.8rem] uppercase font-serif font-extrabold tracking-widest lg:m-6 my-5">
              ₹999.00
            </h1>
          </div>
        </div>

        {/* total section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="w-[30%] h-[60%] bg-white rounded-lg shadow-lg shadow-gray-200"></div>
      </div>
    </div>
  );
}

export default CartSection;
