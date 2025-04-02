import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRequestData from "../../../hooks/useRequestData";

const AdminRecipe = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const {
    makeRequest: deleteRequest,
    isDeleting,
    data: deleteData,
    error: deleteError,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://127.0.0.1:5020/api/coffeerecipes", "GET");
  }, [deleteData]);

  const handleDelete = (ID) => {
    deleteRequest(`http://127.0.0.1:5020/api/coffeerecipes/${ID}`, "DELETE");
  };

  return (
    <section className="max-w-6xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Admin Recipes</h2>

      {isLoading && <h2 className="text-center text-gray-500">Loading...</h2>}
      {error && <h2 className="text-center text-red-500">Error</h2>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.map((r) => (
            <div
              key={r._id}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <img
                src={`http://127.0.0.1:5020/uploads/${r.image}`}
                alt={`Photo of ${r.title}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-2">{r.title}</h4>
              <p className="text-gray-700 mb-4">{r.description}</p>
              <div className="flex justify-between">
                <Link
                  to={`editrecipe/${r._id}`}
                  className="px-4 py-2 font-bold text-white rounded bg-blue-500 hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(r._id)}
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

export default AdminRecipe;
