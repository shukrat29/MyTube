import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Music",
  "Gaming",
  "Software development",
  "Data Structures",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
