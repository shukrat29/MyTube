import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-52">
      <ul>
        <li className="font-semibold">Home</li>
        <li className="font-semibold">Shorts</li>
        <li className="font-semibold">Subscriptions</li>
        <li className="font-semibold">YouTube Music</li>
      </ul>
      <h1 className="pt-4 font-bold">Subscriptions</h1>
      <ul>
        <li>Sky News</li>
        <li>CBC News</li>
        <li>Lex Clips</li>
        <li>Milestone Study</li>
      </ul>
      <h1 className="pt-4 font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
