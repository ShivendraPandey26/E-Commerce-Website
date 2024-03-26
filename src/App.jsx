import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="/home" element={<Home />} />
          <Route  exact path ='/products' element={<Products />}/>
          <Route path="/about" element={<About/>}></Route>    
          <Route path="/contact" element={<Contact/>}></Route>    
        </Routes>
        </BrowserRouter>      
      </div>
    </>
  );
}

export default App;
