import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

//hook til at gente data fra API-url
import useRequestData from "../../hooks/useRequestData";

const RecipesSearch = () => {
  const { searchkey } = useParams();

  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest(
      "http://127.0.0.1:5020/api/coffeerecipes/search?q=" + searchkey,
      "GET"
    );
  }, [searchkey]);

  return (
    <section className="container">
      <h1 className="text-3xl">Searched for "{searchkey}"</h1>
      {isLoading && <h2>loading</h2>}
      {error && <h2>Error</h2>}

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {data && data.map((r) => <RecipeCard key={r._id} r={r} />)}
      </article>
    </section>
  );
};

export default RecipesSearch;
