import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

const Jumbotron = () => {
  return (
    <div className="container  py-5 flex items-center justify-center">
      <main className="text-center">
        <div className={styles.fade_in_image}>
          <Image
            src="https://lh5.googleusercontent.com/p/AF1QipMe0WKfEbEWRExhNZTIxzP2dL5CbDrZ9TJQed-i=w1440-h1080-k-no"
            width={500}
            height={400}
            className="rounded-2xl w-15 h-5 md:w-32 lg:w-48 sm:h-5 sm:w-10"
          />
        </div>
        <h1 className="text-4xl py-4 ">Shine Enterprises</h1>
        <h3 className="text-xl font-thin">
          Housekepping products | Cleaning products | Cleaning Chemicals
        </h3>
        <Link href="tel:+919443106008">
          <button className="rounded-lg bg-indigo-400 hover:bg-indigo-500 text-white px-3 py-2 my-3">
            Contact us
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Jumbotron;
