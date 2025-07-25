// components/IconButton.jsx
import React from "react";

const IconButton = ({ Icon, label, onClick, color = "text-gray-600", hoverColor = "hover:text-blue-500" }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 p-2 rounded-full ${color} ${hoverColor} transition-colors duration-2000`}
  >
    <Icon className="w-5 h-5" />
    {label && <span className="hidden md:inline">{label}</span>}
  </button>
);

export default IconButton;
