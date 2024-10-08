import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price, image, rating, btn, DiscountPercentage, brandName, AddToCartCard, id}) => {
  return (
    <>
      <div className="lg:w-64 md:w-64 sm:w-40 w-40 h-[25rem] bg-white shadow-md rounded-lg p-4 duration-300 ease-in mb-5">
        <Link to={`/singleproduct/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover overflow-hidden rounded-lg mb-4 cursor-pointer"
        />
        </Link>
        <span className="relative right-4 bottom-[11.8rem] py-2 px-3 bg-red-600 me-10 text-white rounded-md z-0">
          {DiscountPercentage}% 
        </span>
          <h1>{brandName}</h1> 
        <h2 className="lg:text-lg md:text-lg sm:text-sm text-sm font-semibold">
          {title}
        </h2>
        <p className="text-gray-500 text-sm">₹{price}.00 </p>
        <p className="text-gray-500 text-sm">Rating : {rating} / 5</p>
        <button 
        className=" h-9 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 rounded-lg w-full mt-4"
        onClick={AddToCartCard}
        >
          {btn}
        </button>
      </div>
    </>
  );
};

export default Card;
