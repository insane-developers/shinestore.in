import React from "react";
import Truck from "@heroicons/react/outline/TruckIcon";
import Cart from "@heroicons/react/outline/ShoppingCartIcon";
import Clock from "@heroicons/react/outline/ClockIcon";
import Badge from "@heroicons/react/outline/BadgeCheckIcon";

const Services = () => {
  return (
    <div className="container mx-auto my-auto flex flex-col items-center py-6">
      <div>
        <h1 className="text-3xl">Services</h1>
      </div>
      <ul className="py-5 list-disc font-thin">
        <li>Institution supply</li>
        <li>Management supply</li>
        <li>Offices and companies supply</li>
        <li>Wholsale trade supply</li>
        <li>Retail outlet</li>
      </ul>
      <div className="flex p-5">
        <Truck className="w-10 h-15 mx-3" />
        <Cart className="w-10 h-15 mx-3" />
        <Clock className="w-10 h-15 mx-3" />
        <Badge className="w-10 h-15 mx-3" />
      </div>
    </div>
  );
};

export default Services;
