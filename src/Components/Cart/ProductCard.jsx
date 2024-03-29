import React from 'react'
import { IoMdClose } from "react-icons/io";

function ProductCard() {
  return (
    <>
    <section className="lg:w-[90%] md:w-[90%] text-gray-600 body-font overflow-hidden border mb-5 mx-auto rounded">
        <div className="container mx-auto ">
          <div className="w-full lg:h-[14rem] md:h-[12rem] sm:h-[10rem] h-[4rem] mx-auto bg-white flex">
            <img
              alt="ecommerce"
              className="object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div className="w-full lg:pl-3 md:pl-3 sm:pl-1 pl-1 lg:py-6">
              <h1 className="lg:text-sm md:text-xs sm:text-xs text-[0.6rem] title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h1>

                <div className='flex justify-between items-start'>

              <h1 className="text-gray-900 lg:text-3xl md:text-2xl sm:text-xl text-[0.8rem] title-font font-medium lg:mb-1 md:mb-0 sm:mb-0 mb-0">
                The Catcher in the Rye
              </h1>

              <div className='relative lg:bottom-9 lg:right-2 md:bottom-9 md:right-2 sm:bottom-4 sm:right-1 right-[4.5rem] bottom-3'>
              <button className='lg:text-3xl md:text-3xl sm:text-lg text-sm' > <IoMdClose/> </button>
              </div>

              </div>

              <div className="flex lg:mb-1">
                <span className="flex items-center lg:h-5 md:h-2 sm:h-1 h-0">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 lg:h-4 md:h-3 sm:h-2 h-0 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3 lg:text-lg md:text-xs sm:text-xs text-[00px]">4 Reviews</span>
                </span>
                
              </div>

              <p className="lg:w-full md:w-full sm:w-72 w-64 overflow-hidden lg:leading-relaxed lg:pe-5 md:pe-3 sm:pe-0 pe-0 lg:text-sm md:text-xs sm:text-xs text-[00px]">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY.
              </p>
              <div className="flex mt-2 items-center justify-between mb-1">
                <div className="flex items-center justify-center">
                
                <div className="flex ml-2 items-center lg:text-xl md:text-lg sm:text-xs text-xs">
                  <span className="lg:mr-3 lg:text-xl md:text-xs sm:text-xs text-[0px]">Size</span>
                  <div className="relative">
                    <select className=" lg:w-12 md:w-12 sm:w-0 w-0 rounded border appearance-none border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base lg:pl-3 lg:static md:static sm:relative relative top-7">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>

                    <span className="title-font font-medium lg:text-2xl md:text-xs sm:text-xs text-[0.8rem] lg:static md:static sm:relative relative bottom-4 right-6 text-gray-900 lg:mx-5">
                  $58.00
                </span>
                  </div>
                </div>
                </div>
              
              <div className="flex items-center">
                
                <button className="rounded-full lg:w-10 md:w-3 sm:w-2 w-5 lg:h-10 md:h-3 sm:h-2 h-5 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 me-5 lg:static md:static sm:relative relative right-[3rem] bottom-4 cursor-not-allowed">
                  <svg
                    fill="currentColor"
                    strokeWidth="2"
                    className="w-5 lg:h-5 md:h-3 sm:h-2 h-3 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductCard