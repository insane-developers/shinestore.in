import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-indigo-500  ">
      <nav className="container mx-auto ">
        <div className="sm:flex justify-left">
          <Link href="/">
            <h2 className="text-3xl px-3 py-3 cursor-pointer text-white hover:text-slate-300 font-semibold animate-pulse">
              shinestore.in
            </h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
