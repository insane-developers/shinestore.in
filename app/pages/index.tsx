import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Customers from "../components/Customers";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shine Enterprises</title>
      </Head>
      <Navbar />
      <div className="md:container md:mx-auto">
        <Jumbotron />
        <About />
        <Services />
        <Customers />
        <Products />
      </div>
    </div>
  );
};

export default Home;
