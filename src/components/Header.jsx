import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // api call
    getSearchSuggestions();
    // in normal, it make an api call after every key press

    // but we can apply debounce and can make such as: if the difference between 2 api calls is <200ms decline the API call
  }, [searchQuery]);

  // api call
  const getSearchSuggestions = async () => {
    const data = await fetch(
      import.meta.env.VITE_SEARCH_SUGGESTION_API + searchQuery
    );

    const json = await data.json();
    console.log(json);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-8 shadow-lg">
      {/* top left */}
      <div className="flex col-span-1">
        {/* hamburger menu */}
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
