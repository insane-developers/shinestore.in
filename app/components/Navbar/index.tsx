import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-indigo-500 sticky top-0">
      <nav className="container mx-auto ">
        <div className="sm:flex justify-left">
          <Link href="/">
            <h2 className="text-3xl px-3 py-3 text-white font-semibold">
              shinestore.in
            </h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
