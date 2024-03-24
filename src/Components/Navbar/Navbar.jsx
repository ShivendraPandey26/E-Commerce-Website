import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="border-2 flex justify-between">
        {/* navbar logo section  */}
        <div>
          <h1>
            <span>Snap</span>Shop
          </h1>
        </div>

        {/* navigation links section */}
        <div>

        <ul className="flex gap-10">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        </div>


        {/* navbar button section */}
        <div>
            <button type='button' className=' '>Sign Up</button>
            <button type='button' className=' '> <FaCartShopping /> </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
