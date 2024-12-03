import React from "react";
import logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-8 shadow-lg">
      {/* top left */}
      <div className="flex col-span-1">
        {/* hamburger menu */}
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwD9vnKk5oPrEHIthwjMIshbnqJgQDgdAvfA&s"
          alt=""
        />
        {/* logo */}
        <img className="h-8" src={logo} alt="" />
      </div>

      {/* middle part searchbar */}
      <div className="flex col-span-10 items-center">
        <input
          className="border border-gray-500 w-4/12 pl-6 text-md p-2 rounded-l-full"
          type="text"
          placeholder="Search...."
        />
        <button className="border border-gray-500 bg-gray-100 p-3 rounded-r-full px-4">
          <IoSearchOutline className="text-md " />
        </button>
      </div>

      {/* right side user icon */}
      <div className="col-span-1">
        <img
          className="h-8 border rounded-full border-gray-800"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPw5bBDGU9tj9iLzgruSmDXe5qci2ROe-amA&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
