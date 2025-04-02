import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "../../../components/Message";
import useRequestData from "../../../hooks/useRequestData";

const EditEvents = () => {
  const { id } = useParams();

  const { makeRequest, isLoading, data, error } = useRequestData();
  const {
    makeRequest: makeRequestPut,
    isLoading: putLoading,
    data: putData,
    error: putError,
  } = useRequestData();

  useEffect(() => {
    makeRequest(`http://127.0.0.1:5020/api/coffeeevents/${id}`, "GET");
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequestPut(
      `http://127.0.0.1:5020/api/coffeeevents/${id}`,
      "PUT",
      e.target
    );
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
      {putData && (
        <Message messageText={`Event has been updated to '${putData.title}'`} />
      )}
      {isLoading ||
        (putLoading && <h2 className="text-gray-500">Loading...</h2>)}
      {error ||
        (putError && <h2 className="text-red-500">Error updating event</h2>)}
      {data && (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-medium">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={data.title}
              placeholder="Enter title here"
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={data.description}
              placeholder="Description"
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Next Event</label>
            <input
              type="date"
              name="nextEvent"
              defaultValue={data.nextEvent?.split("T")[0]}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Update Event
          </button>
        </form>
      )}
    </section>
  );
};

export default EditEvents;
