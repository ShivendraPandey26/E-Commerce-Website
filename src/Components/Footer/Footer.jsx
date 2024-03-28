import React from "react";
import { FaShopify, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedin,
  FaQuora,
  FaRegCopyright,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex items-center justify-evenly bg-black p-10">
        <div className="m-5 max-w-5xl">
          <div className="flex flex-col items-center justify-around md:flex-row">
            <div className="items-center m-1 me-5 justify-items-start w-60">
              <FaShopify
                className="text-white text-7xl mx-auto cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/ShivendraPandey26/", "_blank")
                }
              />
              <center className="text-xl font-semibold text-blue-600">
              <span className="text-2xl font-semibold text-orange-600">
                Snap
              </span>
              Shop
            </center>
              <div className="text-gray-300 md:text-center">
                {" "}
                Explore SnapShop for all your shopping needs. Secure checkout,
                fast delivery. Happy shopping!
              </div>
            </div>
            <div className="items-center m-1 justify-items-start w-60  lg:mt-0 mt-10">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Product{" "}
              </h1>
              <Link to='/' className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Home
              </Link>
              
              <Link to= '/products' className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
              All Products
              </Link>
              <Link to= '/about' className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                About
              </Link>
              <Link to= '/contact' className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Contact
              </Link>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Chrome Extensions
              </a>
            </div>
            <div className="items-center m-1 justify-start w-60 lg:mt-0 mt-10">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Company{" "}
              </h1>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Terms
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Customers
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Blog
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Terms of Services
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear">
                Privacy Policy
              </a>
            </div>
            <div className="items-center m-1 w-60 lg:mt-0 mt-10">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Support{" "}
              </h1>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear ">
                Community
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear ">
                Support Customers
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear ">
                Documentations
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear ">
                Service Providers
              </a>
              <a href="#" className="flex hover:text-blue-600 text-gray-500 hover:ps-2 duration-200 ease-linear ">
                Email Contact
              </a>
            </div>
            <div className="items-center w-60 lg:mb-20 pt-10">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium ">
                {" "}
                Contact Us{" "}
              </h1>
              <a href="#" className="flex text-gray-500 hover:ps-2 hover:text-blue-600 duration-200 ease-linear">
                suppport@admin.com
              </a>
              <a href="#" className="flex text-gray-500 hover:ps-2 hover:text-blue-600 duration-200 ease-linear">
                (+251)987-6543-210
              </a>

              <div className="flex">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
                >
                  <FaTwitter className="text-xl hover:scale-150 transition-all ease-in-out" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
                >
                  <FaInstagram className="text-xl hover:scale-150 transition-all ease-in-out" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
                >
                  <FaFacebook className="text-xl hover:scale-150 transition-all ease-in-out" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
                >
                  <FaLinkedin className="text-xl hover:scale-150 transition-all ease-in-out" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
                >
                  <FaQuora className="text-xl hover:scale-150 transition-all ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <center className= "w-full text-white bg-blue-600 font-medium py-4"> 
        <samp>
        <span className="font-bold font-mono text-sm">ⓒ</span>Copyright {new Date().getFullYear()} All Rights
          Reserved. Developed By <a href="https://github.com/ShivendraPandey26/" target="_blank"  className="underline underline-offset-4"> Shivendra Pandey</a>
          </samp>
        </center>
     
    </>
  );
}

export default Footer;
