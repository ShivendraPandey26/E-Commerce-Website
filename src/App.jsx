import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import SignUP from "./Components/SignUP Page/SignUP";
import Login from "./Components/SignUP Page/Login";
import CartSection from "./Components/Cart/CartSection";
import { ProductContextProvider } from "./Components/Context/ProductContext";
import { useState } from "react";

function App() {

  const [cartProduct,  setCartProduct] = useState([]);

  const AddToCart = (product) => {
    const existingProductIndex = cartProduct.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        const updatedCart = [...cartProduct];
        updatedCart[existingProductIndex].quantity += 1;
        setCartProduct(updatedCart);
    } else {
        // If the product doesn't exist in the cart, add it with quantity 1
        setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };


  const handleQuantity = (event) => {
    
  }




  return (
        <ProductContextProvider value = {{AddToCart, cartProduct, setCartProduct, handleQuantity}} >
      <div>
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="/home" element={<Home />} />
          <Route  exact path ='/products' element={<Products />}/>
          <Route path="/about" element={<About/>}></Route>    
          <Route path="/contact" element={<Contact/>}></Route> 
          <Route path="/signup"  element={<SignUP />}></Route> 
          <Route path="/login"  element={<Login />}></Route> 
          <Route path="/cart" element={<CartSection />} />
        </Routes>
        </BrowserRouter>    
        </div>
        </ProductContextProvider>  
  );
}


export default App
