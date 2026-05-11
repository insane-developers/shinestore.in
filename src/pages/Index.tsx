import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Partners from "../components/Partners";
import BulkSupply from "../components/BulkSupply";
import Directions from "../components/Directions";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <div id="products">
        <BulkSupply />
        <Products />
      </div>
      <Directions />
      <Footer />
    </div>
  );
};

export default Index;
