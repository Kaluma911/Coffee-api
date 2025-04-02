import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRequestData from "../../../hooks/useRequestData";

const AdminEvents = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const {
    makeRequest: deleteRequest,
    isDeleting,
    data: deleteData,
    error: deleteError,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://127.0.0.1:5020/api/coffeeevents", "GET");
  }, [deleteData]);

  const handleDelete = (ID) => {
    deleteRequest(`http://127.0.0.1:5020/api/coffeeevents/${ID}`, "DELETE");
  };

  return (
    <section className="max-w-6xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Admin Events</h2>

      {isLoading && <h2 className="text-center text-gray-500">Loading...</h2>}
      {error && <h2 className="text-center text-red-500">Error</h2>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.map((event) => (
            <div
              key={event._id}
              className="p-6 bg-white rounded-lg shadow-md relative border border-gray-200"
            >
              <h3 className="text-xl font-bold">{event.title}</h3>
              <h4 className="text-gray-600 text-sm mt-2">
                {new Date(event.nextEvent).toLocaleString("da-DK", {
                  hour12: false,
                  hour: "numeric",
                  minute: "numeric",
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </h4>
              <p className="mt-2 text-gray-700">{event.description}</p>

              <div className="mt-4 flex justify-between">
                <Link
                  to={"editevent/" + event._id}
                  className="px-4 py-2 font-bold text-white rounded bg-blue-500 hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AdminEvents;
