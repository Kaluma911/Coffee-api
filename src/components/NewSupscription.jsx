import React from "react";
import useRequestData from "../hooks/useRequestData";

const NewSupscription = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const handleSubscription = (e) => {
    e.preventDefault();

    makeRequest(`http://127.0.0.1:5020/api/coffeerecipes/`, "POST", e.target);
  };

  return (
    <div className="flex">
      {data && <h2>tak for din tilmelding</h2>}

      {!data && (
        <div>
          <h2>tilmeld dig vores nyhedsbrev</h2>
          <form onSubmit={handleSubscription} className="flex flex-col">
            <input type="text" name="email" placeholder="din email" />
            <input type="text" name="name" placeholder="dit navn" />
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              type="submit"
            >
              Tilemld
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewSupscription;
