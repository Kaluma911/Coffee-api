import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

//hook til at gente data fra API-url
import useRequestData from "../../hooks/useRequestData";

const Recipes = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [currentStartItem, setCurrentStartItem] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    makeRequest("http://127.0.0.1:5020/api/coffeerecipes", "GET");
  }, []);

  return (
    <section className="w-full flex justify-center">
      <section className="container">
        <h1 className="text-3xl">Recipes</h1>

        {isLoading && <h2>loading</h2>}
        {error && <h2>Error</h2>}
        <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {data &&
            data
              .slice(currentStartItem, itemsPerPage + currentStartItem)
              .map((r) => <RecipeCard key={r._id} r={r} />)}
        </article>
        <article className="flex flex-row justify-center gap-2">
          {/* prev button */}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
            onClick={() => setCurrentStartItem(currentStartItem - itemsPerPage)}
            disabled={currentStartItem - itemsPerPage < 0}
          >
            Prev
          </button>

          {/* pagination buttons */}
          {data &&
            Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-2 rounded-lg ${
                    currentStartItem / itemsPerPage === i
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition`}
                  onClick={() => setCurrentStartItem(i * itemsPerPage)}
                >
                  {i + 1}
                </button>
              )
            )}

          {/* next button */}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
            onClick={() => setCurrentStartItem(currentStartItem + itemsPerPage)}
            disabled={currentStartItem + itemsPerPage >= data?.length}
          >
            Next
          </button>
        </article>
      </section>
    </section>
  );
};

export default Recipes;

// <div
//   key={r._id}
//   className="p-4 m-4 rounded relative border-white border "
// >
//   <img
//     src={"http://127.0.0.1:5020/uploads/" + r.image}
//     alt={"foto af" + r.title}
//     className="w-full"
//   />
//   <h4>{r.title}</h4>
//   <p>{r.description}</p>
//   <button className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-rose-500 hover:bg-rose-700">
//     læs mere
//   </button>
// </div>
