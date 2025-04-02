import React, { useEffect, useState } from "react";
import EventCards from "./EventCards";

//hook til at gente data fra API-url
import useRequestData from "../../hooks/useRequestData";

const Events = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://127.0.0.1:5020/api/coffeeevents", "GET");
  }, []);

  return (
    <section className="w-full flex justify-center">
      <section className="container">
        <h1 className="text-3xl">Events</h1>

        {isLoading && <h2>loading</h2>}
        {error && <h2>Error</h2>}
        <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {data && data.map((e) => <EventCards key={e._id} e={e} />)}
        </article>
      </section>
    </section>
  );
};

export default Events;
