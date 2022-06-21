import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-6">
        <h1 className="text-3xl  text-center py-2 ">Customers</h1>
        <p className="text-center font-thin text-xl ">
          All our customers are satisfied by our service and products
        </p>
      </div>
      <Image
        src="https://github.com/insane-developers/shinestore.in/blob/main/app/cdn/CTI.png?raw=true"
        height={500}
        width={400}
      />
    </div>
  );
};

export default Customers;
