import React from "react";
import { useNavigate } from "react-router-dom";

// brugeren skriver i input og trukker på søg
//vi snupper søgeirdet og sender det vidre i url'en (parems) til (navigerer til) RecipesSearch.jsx

const SearchBox = () => {
  const navigate = useNavigate(); //hook til at navigere til en anden component

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/recipesearch/" + e.target.search.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" required placeholder="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
