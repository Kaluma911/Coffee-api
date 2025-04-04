import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/AuthProvider";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
    >
      <BiLogOut /> Logout
    </button>
  );
};

export default LogoutButton;
