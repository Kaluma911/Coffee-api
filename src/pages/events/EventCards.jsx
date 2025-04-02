import React from "react";

const EventCards = ({ e }) => {
  return (
    <div className="p-4 m-4 rounded relative border-white border ">
      <h3>{e.title}</h3>
      <p className="text-black text-sm mt-2">
        {new Date(e.nextEvent).toLocaleString("da-DK", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </p>
      <p>{e.description}</p>
      <button className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-rose-500 hover:bg-rose-700">
        læs mere
      </button>
    </div>
  );
};

export default EventCards;
