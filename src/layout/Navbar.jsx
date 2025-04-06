import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import SearchBox from "../pages/recipes/SearchBox";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-slate-300">
      <nav className="flex items-center justify-between p-4 px-8">
        {/* logo */}
        <div className="text-3xl">Logo</div>

        {/* burgor icon*/}
        <article className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </article>

        {/* normal nav */}
        <ul className="hidden md:grid grid-cols-5 gap-4">
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

        {/* login*/}
        <article className="hidden md:block">
          <NavLink reloadDocument to={"/admin"}>
            Login
          </NavLink>
        </article>
      </nav>

      {/* burgor menu*/}
      {isOpen && (
        <article className="md:hidden px-8 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink reloadDocument to={"/"} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to={"/about"}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to={"/recipes"}
                onClick={() => setIsOpen(false)}
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to={"/events"}
                onClick={() => setIsOpen(false)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <SearchBox />
            </li>
            <li>
              <NavLink
                reloadDocument
                to={"/admin"}
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </article>
      )}
    </section>
  );
};

export default Navbar;
