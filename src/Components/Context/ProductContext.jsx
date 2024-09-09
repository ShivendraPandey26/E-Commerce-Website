import React, { createContext, useContext } from "react";


export const ProductContext  = createContext({
    AddToCart : ()  => {},
    cartProduct : [],
    Checkout : () => {},
});

export const ProductContextProvider = ProductContext.Provider;

export default function useProduct() {
    return useContext(ProductContext);
}

