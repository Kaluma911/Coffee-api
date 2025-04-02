import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      <h1 className="text-6x1 font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2x1 font-semibold text-gray-800 mb-6"></h2>
      <p>
        Sorry, the page you're looking for doesn't exist or has been moved. Use
        the button below to return to the home page.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Return to Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
