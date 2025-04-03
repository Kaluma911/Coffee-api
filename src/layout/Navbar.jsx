import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "../pages/recipes/SearchBox";

const Navbar = () => {
  return (
    <div className="bg-slate-300">
      <nav className="grid grid-cols-3 p-3 px-8">
        <div>
          <p className="text-3xl">Logo</p>
        </div>
        <ul className="grid grid-cols-5">
          <li>
            <NavLink reloadDocument to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink reloadDocument to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink reloadDocument to={"/recipes"}>
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink reloadDocument to={"/events"}>
              Events
            </NavLink>
          </li>
          <li>
            <SearchBox />
          </li>
        </ul>
        <div className="text-end">
          <NavLink reloadDocument to={"/admin"}>
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
