
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Partners from '../components/Partners';
import Directions from '../components/Directions';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Products />
      <Directions />
      <Footer />
    </div>
  );
};

export default Index;
