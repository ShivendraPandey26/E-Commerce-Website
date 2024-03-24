import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { BrowserRouter , Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route  path={"/" && "/home"} element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>    
          <Route path="/contact" element={<Contact/>}></Route>    
        </Routes>
        </BrowserRouter>      
      </div>
    </>
  );
}

export default App;
