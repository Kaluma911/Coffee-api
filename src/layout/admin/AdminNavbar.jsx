import React from "react";
import { FaHome, FaInfoCircle, FaUtensils } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 fixed top-0 left-0 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              reloadDocument
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              reloadDocument
              to="/createrecipe"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaUtensils /> Create Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              reloadDocument
              to="/createrecipe"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <MdEvent /> Create Event
            </NavLink>
          </li>
          <li>
            <NavLink
              reloadDocument
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaInfoCircle /> About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
