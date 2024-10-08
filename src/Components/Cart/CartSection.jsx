import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProduct from "../Context/ProductContext";
import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function CartSection() {
  const { cartProduct, Checkout } = useProduct();
  const [promoInput, setPromoInput] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const subTotal = () => {
    const initialValue = 0;
    let sum = cartProduct.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      initialValue
    );
    const roundedNum = sum.toFixed(2); // Rounds to 2 decimal places
    return roundedNum;
  };

  const promoCode = "shivendra";
  const discountPercentage = 20;

  const handlePromoCode = () => {
    const originalPrice = subTotal();
    if (promoInput === promoCode) {
      const discount = (originalPrice * discountPercentage) / 100;
      const discountedPrice = originalPrice - discount;
      return parseInt(discountedPrice);
    } else {
      return null;
    }
  };

  return (
    <>
      <Layout>
        {cartProduct == "" ? (
          <div className="w-full h-[90vh] text-center  ">
            <h2 className="text-5xl font-semibold mb-10 text-[#31587c] font-serif pt-[15%]">
              Oops! Your Shopping Bag is Empty.
            </h2>
          </div>
        ) : (
          <div className="bg-[#dbecec] h-full">
            <div className="pb-20"></div>

            <div className="w-[90%] h-auto mx-auto mb-10 bg-transparent rounded-xl shadow-2xl shadow-gray-500">
              <div className="h-[14%]">
                <h1 className="text-2xl uppercase font-serif font-extrabold tracking-[0.4rem] p-6 text-[#32597d]">
                  my bag
                </h1>
                <hr className="border-b border-gray-400" />
              </div>

              <div className="w-full h-[76%] overflow-y-scroll no-scrollbar">
                {cartProduct.map((item, index) => (
                  <ProductCard
                    id={item.id}
                    key={index}
                    image={item.thumbnail}
                    brandName={item.brand}
                    price={item.price + ".00"}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    quantity={item.quantity}
                  />
                ))}
              </div>

              <div className="flex items-center justify-end w-full h-[10%] lg:ps-[45%] border-t-2 border-gray-400">
                <h1 className="text-[#32597d] capitalize font-serif lg:text-2xl md:text-xl sm:text-xl text-[0.8rem] font-extrabold tracking-widest m-8">
                  sub - total
                </h1>
                <h1 className="text-[#32597d] capitalize font-sans lg:text-3xl md:text-xl sm:text-xl text-[0.8rem] font-extrabold tracking-widest m-8">
                  <span className="text-xl">₹</span>
                  {subTotal() + ".00"}
                </h1>
              </div>
            </div>

            {/*   total  amount and checkout section  */}

            <div className="lg:w-[35%] md:w-1/2 sm:w-3/4 w-11/12 h-auto lg:ms-[60%] md:ms-[60%] sm:mx-auto mx-auto bg-transparent rounded-lg shadow-2xl shadow-gray-700">
              <div className="w-full h-auto">
                <h1 className="capitalize text-2xl font-serif font-bold p-5 text-[#32597d]">
                  cart total
                </h1>
                <hr className="border border-gray-400 w-[100%]" />

                <div className="flex items-center justify-between p-4">
                  <h1 className="text-[#32597d] text-lg font-semibold">
                    Total items
                  </h1>
                  <p className="text-[#305980] text-xl">{cartProduct.length}</p>
                </div>

                <div className="flex items-center justify-between px-4">
                  <h1 className="text-[#32597d] text-lg font-semibold">
                    Sub-total
                  </h1>
                  <p className="text-[#305980] text-xl">₹{subTotal()}.00</p>
                </div>

                <div className="flex items-center justify-between p-5">
                  <h1 className="text-[#32597d] text-lg font-semibold">
                    Promo code
                  </h1>
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter PromoCode"
                        className="p-2 rounded-md"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                      />
                    </div>

                    {promoInput !== "shivendra"
                      ? promoInput !== "" && (
                          <div className="text-center text-red-600">
                            {"Invalid Promo Code!"}
                          </div>
                        )
                      : null}
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 mt-5 border-b border-t border-gray-400 ">
                  <h1 className="capitalize text-2xl font-serif font-bold text-[#32597d]">
                    Total Cost
                  </h1>
                  <h1 className="capitalize text-2xl font-sans font-bold text-[#32597d]">
                    <span className="text-2xl ">₹</span>
                    {handlePromoCode() || subTotal()}.00
                  </h1>
                </div>

                <div className="flex items-center justify-center p-5 border-gray-400">
                  <button
                    onClick={() => setModalIsOpen(true)}
                    className="w-[80%] h-12 bg-orange-500 hover:bg-orange-600 rounded-3xl text-2xl text-white"
                  >
                    Proceed to Buy
                  </button>
                </div>

                <div className="m-5 pb-2 text-[#32597d]">
                  Promo code is "shivendra". Enter the code and get a discount
                  of 20%!
                </div>
              </div>
            </div>

            <div className="p-5"></div>
          </div>
        )}
      </Layout>

      
      // modal for checkout
      <Modal isVisible={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div className="w-full h-auto text-center bg-[#eaf5f5] py-10 lg:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:mb-10 text-[#31587c] font-serif">
            Thank you for your purchase!
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 px-5 py-5">
          <Link
          to="/"
            onClick={() => {Checkout()}}
            className="p-3 px-10 bg-orange-500 hover:bg-orange-600 rounded-3xl text-lg md:text-xl lg:text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Continue Shopping
          </Link>
        </div>
      </Modal>
    </>
  );
}

export default CartSection;
