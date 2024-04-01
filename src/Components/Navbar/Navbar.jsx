import React, { useState } from "react";
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import useProduct from "../Context/ProductContext"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const { setCartProduct, cartProduct, addToCart } = useProduct();

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className= "sticky left-0 top-0 bg-white  border-b-2 border-gray-300 flex justify-between items-center p-5 py-7">
        {/* navbar logo section  */}
        <div className="hover:scale-110 duration-500 ease-out">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <h1 className="text-xl font-semibold text-blue-600">
              <span className="text-2xl font-semibold text-orange-600">
                Snap
              </span>
              Shop
            </h1>
          </button>
        </div>

        {/* navigation links section */}
        <div>
          {/* Navbar for Desktop */}
          <ul className="sm:flex hidden gap-10">
            <Link to="/">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                Home
              </li>
            </Link>

            <Link to="/products">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                All Products
              </li>
            </Link>

            <Link to="/about">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                Contact
              </li>
            </Link>
          </ul>

          {/* Navbar for Mobile */}
          <ul
            className={`duration-500 left-0 flex flex-col md:hidden text-xl fixed text-black bg-blue-200 w-full h-full text-center py-20 gap-10 ${showMenu ? "top-[13%]" : "top-[-100%]"
              }`}
          >
            <Link to="/">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                Home
              </li>
            </Link>

            <Link to="/products">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                All Products
              </li>
            </Link>

            <Link to="/about">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-xl cursor-pointer font-medium hover:text-orange-600 duration-100">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* navbar button section */}
        <div className="flex justify-between items-center">
          <Link to="/signup">
            <button
              type="button"
              className="w-24 h-10 bg-orange-600 text-white text-lg font-semibold rounded-lg mx-3 hover:bg-orange-700 "
            >
              Sign Up
            </button>
          </Link>

              <Link  to="/cart">
          <button type="button" className="text-2xl mx-5 cursor-pointer">
            <span className=" text-red-600 text-2xl font-extrabold mx-auto">{cartProduct.length}</span>
            <FaCartShopping
             size={30}
             className="relative bottom-2"
             /> 
          </button>
          </Link>

          {/* Moblie  NavBar section  */}
          {showMenu ? (
            <IoMdClose className="text-4xl sm:hidden cursor-pointer" onClick={handleToggle} />
          ) : (
            <IoMdMenu className="text-4xl sm:hidden cursor-pointer  " onClick={handleToggle} />
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
