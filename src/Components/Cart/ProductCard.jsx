import React from "react";
import useProduct from "../Context/ProductContext";


function ProductCard({image, brandName, price, title, description, rating}) {

  const { product, addToCart } = useProduct();


  return (
    <section className="text-gray-600 body-font w-full mb-5 ">
      <div className="container px-5 py-2 mx-auto  lg:h-80">
        <div className="lg:w-4/5 mx-auto flex flex-wrap lg:h-full items-center border border-gray-400 rounded-xl">
          <img
            alt="ecommerce"
            className="lg:w-auto w-full h-full lg:h-auto object-cover object-center rounded"
            src= {image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {brandName}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-2">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
              <span className="text-gray-600 ml-1">{rating} Reviews</span>
            </div>
            <p className="leading-relaxed mb-2">
              {description}
            </p>
            <div className="flex items-center mb-2">
              <div className="relative mr-4">
                <label
                  htmlFor="size-select"
                  className="text-base font-medium text-gray-900 mr-1"
                >
                  Size
                </label>
                <select
                  id="size-select"
                  className="rounded border appearance-none border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm"
                >
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="relative mr-4">
                <label
                  htmlFor="quantity-select"
                  className="text-base font-medium text-gray-900 mr-1"
                >
                  Quantity
                </label>
                <select
                  id="quantity-select"
                  className="rounded border appearance-none border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm"
                >
                  {[...Array(5)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-grow"></div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-lg text-gray-900">
                {price}
              </span>
            </div>
            <div className=" text-red-500 hover:text-red-700 hover:text-lg duration-500 ease-out">
              <button>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;