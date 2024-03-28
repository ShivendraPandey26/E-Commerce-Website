import React from "react";
import { FaPaypal, FaTruckFast } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

function FourDiv() {
    return (
        <>
            <center className="container w-screen h-auto p-14 flex items-center justify-around text-white flex-wrap mx-auto gap-10 my-10">
                <div className="bg-orange-500 lg:w-[20%] lg:h-20 md:w-[20%] md:h-20 sm:w-[50%] sm:h-20 w-[100%] h-20 p-4  rounded-md hover:bg-orange-600 hover:scale-110 transition duration-300">
                    <center>
                        {" "}
                        <FaTruckFast size={25} />{" "}
                    </center>{" "}
                    FREE SHIPPING
                </div>
                <div className="bg-orange-500  lg:h-20 md:w-[20%] md:h-20 sm:w-[50%] sm:h-20 w-[100%] h-20 p-4  rounded-md hover:bg-orange-600 hover:scale-110 transition duration-300">
                    <center>
                        {" "}
                        <TbTruckReturn size={25} />{" "}
                    </center>{" "}
                    EASSY RETURN
                </div>
                <div className="bg-orange-500 lg:h-20 md:w-[20%] md:h-20 sm:w-[50%] sm:h-20 w-[100%] h-20 p-4   rounded-md hover:bg-orange-600 hover:scale-110 transition duration-300">
                    <center>
                        {" "}
                        <FaPaypal size={25} />{" "}
                    </center>
                    PAYMENT SECURED
                </div>
                <div className="bg-orange-500  lg:h-20 md:w-[20%] md:h-20 sm:w-[50%] sm:h-20 w-[100%] h-20 p-4   rounded-md hover:bg-orange-600 hover:scale-110 transition duration-300">
                    <center>
                        {" "}
                        <FiShoppingCart size={25} />{" "}
                    </center>
                    AUTHENTI PRODUCTS
                </div>
            </center>
        </>
    );
}

export default FourDiv;
