import React from "react";
import Card from "../Card/Card";

function PopularProducts() {
  return (
    <div className="p-3">
      <h2 className="text-4xl font-semibold mb-20 text-[#31587c] font-serif text-center underline underline-offset-8">
        Popular Products
      </h2>

      <div className="w-screen h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 mb-15 flex-wrap ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PopularProducts;
