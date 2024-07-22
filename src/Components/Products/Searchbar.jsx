import React, { useState } from "react";
import Card from "../Card/Card";

function Searchbar() {
  const [userInput, setUserInput] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const handleSearchUserInput = async () => {
    if (!userInput) return;

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${userInput}`
      );
      const data = await response.json();
      setSearchItems(data.products || []);
      setUserInput("");
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-around flex-wrap bg-blue-300 mb-5">
        <div className="p-5">
          <input
            type="search"
            className="w-52 h-9 rounded-s-lg p-5"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchUserInput();
            }}
          />
          <button
            type="button"
            className="w-24 h-10 bg-orange-600 text-white text-lg font-semibold rounded-e-lg hover:bg-orange-700"
            onClick={handleSearchUserInput}
          >
            Search
          </button>
        </div>
      </div>

      {searchItems.length > 0 && (
        <div className="w-screen h-auto flex flex-col items-center gap-10">
          <h2 className="text-4xl font-semibold mb-10 text-[#31587c] font-sans text-center tracking-widest">
            Search Products
          </h2>
          <div className="w-full h-auto lg:p-10 md:p-10 sm:p-3 p-1 flex flex-wrap justify-center gap-10">
            {searchItems.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.thumbnail}
                btn={"Add To Cart"}
                DiscountPercentage={item.discountPercentage}
                AddToCartCard={() => {
                  AddToCart(item);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Searchbar;
