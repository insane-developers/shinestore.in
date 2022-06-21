import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Customers</h1>
      </div>
      <Image
        src="https://www.canva.com/design/DAFEOh01O6s/view"
        height={500}
        width={500}
      />
    </div>
  );
};

export default Customers;
