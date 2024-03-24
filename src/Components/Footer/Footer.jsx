import React from "react";
import { FaShopify, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaQuora } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex items-center justify-center bg-black p-10  ">
      <div className="m-5 max-w-5xl">
        <div className="flex flex-col items-center justify-around md:flex-row">
          <div className="items-center m-1 me-5 justify-items-start w-60">
            <FaShopify className="text-white text-7xl mx-auto" />
            <div className="text-gray-500 md:text-center">
              {" "}
              Explore SnapShop for all your shopping needs. Secure checkout,
              fast delivery. Happy shopping!
            </div>
          </div>
          <div className="items-center m-1 justify-items-start w-60">
            <h1 className="flex flex-col text-xl text-blue-600 font-medium">
              {" "}
              Product{" "}
            </h1>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Home
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Shop
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              About
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Contact
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Chrome Extensions
            </a>
          </div>
          <div className="items-center m-1 justify-start w-60">
            <h1 className="flex flex-col text-xl text-blue-600 font-medium">
              {" "}
              Company{" "}
            </h1>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Terms
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Customers
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Blog
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Terms of Services
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Privacy Policy
            </a>
          </div>
          <div className="items-center m-1 w-60">
            <h1 className="flex flex-col text-xl text-blue-600 font-medium">
              {" "}
              Support{" "}
            </h1>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Community
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Support Customers
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Documentations
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Service Providers
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              Email Contact
            </a>
          </div>
          <div className="items-center mt-10 pt-5 w-60 md:-mt-16">
            <h1 className="flex flex-col text-xl text-blue-600 font-medium">
              {" "}
              Contact Us{" "}
            </h1>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              suppport@admin.com
            </a>
            <a href="#" className="flex hover:text-blue-600 text-gray-500">
              (+251)987-6543-210
            </a>

            <div className="flex">
              <a
                href="#"
                className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-7 inline-block"
              >
                <FaQuora className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
