import React from "react";
import Message from "../../../components/Message";
import useRequestData from "../../../hooks/useRequestData";

const CreateEvent = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const handleSubmit = (e) => {
    e.preventDefault();

    makeRequest(
      "http://127.0.0.1:5020/api/coffeeevents",
      "POST",
      e.target
    ).then(() => {
      e.target.reset();
    });
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">Create Event</h1>

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
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Next Event</label>
          <input
            type="date"
            name="nextEvent"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create Event
        </button>
      </form>
    </section>
  );
};

export default CreateEvent;
