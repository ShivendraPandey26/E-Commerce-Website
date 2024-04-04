import React from "react";
import Card from "../Card/Card";

function ProductShimEffect() {
  const emptyarr = new Array(30).fill(""); // Create an array of 30 empty strings.
  return (
    <>
      <div className="w-screen h-auto lg:p-10 md:p-10 sm:p-3 p-3 flex justify-center items-center lg:gap-10 md:gap-10 sm:gap-2 gap-2 mb-15 flex-wrap ">
      {emptyarr.map((item ,index) => {
        return <Card 
        key={index}/>
      })}
      </div>
    </>
  );
}

export default ProductShimEffect;
