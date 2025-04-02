import React, { useEffect, useRef } from "react";
import Message from "../../../components/Message";
import useRequestData from "../../../hooks/useRequestData";

import Quill from "quill";
import "quill/dist/quill.snow.css";
const CreateRecipe = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  // reference til brug for quill
  const refQuillContainer = useRef();
  const refQuill = useRef();
  // options for quill
  const quillOptions = {
    theme: "snow",
  };

  useEffect(() => {
    if (!refQuill.current) {
      refQuill.current = new Quill(refQuillContainer.current, quillOptions);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let fd = new FormData(e.target);
    fd.append("description", refQuill.current.getSemanticHTML());

    makeRequest("http://127.0.0.1:5020/api/coffeerecipes", "POST", fd).then(
      () => {
        e.target.reset();
        refQuill.current.setText("");
      }
    );
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">Create Recipe</h1>

      {data && (
        <Message
          messageText={`The recipe has been created with the title '${data.title}'`}
        />
      )}
      {isLoading && <h2 className="text-center text-gray-500">Loading...</h2>}
      {error && <h2 className="text-center text-red-500">Error</h2>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-medium">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title here"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          {/* <label className="font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <div ref={refQuillContainer}></div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Recipe</label>
          <textarea
            name="recipe"
            placeholder="Recipe details"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Image</label>
          <input
            type="file"
            name="image"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create Recipe
        </button>
      </form>
    </section>
  );
};

export default CreateRecipe;
