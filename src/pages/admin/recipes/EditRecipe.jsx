import Quill from "quill";
import "quill/dist/quill.snow.css";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Message from "../../../components/Message";
import useRequestData from "../../../hooks/useRequestData";

const EditRecipe = () => {
  const { id } = useParams();

  const { makeRequest, isLoading, data, error } = useRequestData();
  const {
    makeRequest: makeRequestPut,
    isLoading: putLoading,
    data: putData,
    error: putError,
  } = useRequestData();

  const refQuillContainer = useRef();
  const refQuill = useRef();
  const quillOptions = {
    theme: "snow",
  };

  useEffect(() => {
    if (!refQuill.current && data) {
      refQuill.current = new Quill(refQuillContainer.current, quillOptions);
    }
  }, [data]);

  useEffect(() => {
    makeRequest(`http://127.0.0.1:5020/api/coffeerecipes/${id}`, "GET");
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequestPut(
      `http://127.0.0.1:5020/api/coffeerecipes/${id}`,
      "PUT",
      e.target
    );
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Edit Recipe
      </h2>
      {putData && (
        <Message
          messageText={`Recipe has been updated to '${putData.title}'`}
          className="text-green-600"
        />
      )}
      {isLoading ||
        (putLoading && (
          <h2 className="text-gray-500 text-center">Loading...</h2>
        ))}
      {error ||
        (putError && (
          <h2 className="text-red-500 text-center">Error updating recipe</h2>
        ))}
      {data && (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Title</label>
            <input
              type="text"
              defaultValue={data.title}
              name="title"
              placeholder="Enter title here"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Recipe</label>
            <div
              ref={refQuillContainer}
              className="p-3 border rounded-lg bg-white"
            ></div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Current Image</label>
            <img
              src={`http://127.0.0.1:5020/uploads/${data.image}`}
              alt={`Photo of ${data.title}`}
              className="w-80 mt-2 rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">
              Choose New Image
            </label>
            <input
              type="file"
              name="image"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Update Recipe
          </button>
        </form>
      )}
    </section>
  );
};

export default EditRecipe;
