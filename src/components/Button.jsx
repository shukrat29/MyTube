import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 bg-gray-200 m-2 py-1 rounded-md">{name}</button>
    </div>
  );
};

export default Button;
