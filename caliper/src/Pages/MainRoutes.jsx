import React from "react";
import { Routes , Route} from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Product from "./Product";
import Services from "./Services";
import SingleProduct from "./SingleProduct";

const MainRoutes = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/:id" element={<SingleProduct/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default MainRoutes;
