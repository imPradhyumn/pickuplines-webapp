import React from "react";

const Header = () => {
  return (
    <header className="p-3 shadow shadow-gray-300 flex justify-between">
      <h1 className="text-2xl font-bold md:ms-5">
        <span>💓</span>
        <span className="text-gray-950 ms-1">PickUp</span>{" "}
        <span className="text-pink-600">Lines</span>
      </h1>

      {/* <button className="text-sm px-3 bg-pink-600 text-white rounded-sm shadow shadow-gray-400">
        Add pickupline +
      </button> */}
    </header>
  );
};

export default Header;
