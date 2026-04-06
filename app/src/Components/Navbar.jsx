import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({active}) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <h1 
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        MyBudget
      </h1>

      {/* Navigation Buttons */}
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <button
            onClick={() => navigate("/")}
            className={`${ active==="home"?"text-yellow-400" : "text-white"} hover:text-yellow-400 transition`}
          >
            Home
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate("/balance")}
            className={`${active==="balance"?"text-yellow-400" : "text-white"} hover:text-yellow-400 transition`}
          >
            Balance
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate("/transactionlist")}
            className={`${active==="transactionlist"?"text-yellow-400" : "text-white"} hover:text-yellow-400 transition`}
          >
            Transaction List
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;