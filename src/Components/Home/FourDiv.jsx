import React from "react";
import { FaPaypal, FaTruckFast } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

function FourDiv() {
    return (
        <>
            <div className="container w-screen h-36 flex items-center justify-around text-white ">
                <div className="bg-orange-500 p-6 rounded-md hover:bg-orange-600 transition duration-200">
                    <center> <FaTruckFast size={25} /> </center> FREE SHIPPING
                </div>
                <div className="bg-orange-500 p-6 rounded-md hover:bg-orange-600 transition duration-200">
                    <center> <TbTruckReturn size={25}/>  </center> EASSY RETURN
                </div>
                <div className="bg-orange-500 p-6 rounded-md hover:bg-orange-600 transition duration-200">
                    <center> <FaPaypal size={25}/> </center>PAYMENT SECURED
                </div>
                <div className="bg-orange-500 p-6 rounded-md hover:bg-orange-600 transition duration-200">
                    <center> <FiShoppingCart size={25}/> </center>AUTHENTI PRODUCTS
                </div>
            </div>
        </>
    );
}

export default FourDiv;
