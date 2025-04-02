import React from "react";
import AdminEvents from "./events/AdminEvents";
import CreateEvent from "./events/CreateEvent";
import AdminRecipe from "./recipes/AdminRecipe";
import CreateRecipe from "./recipes/CreateRecipe";

const AdminHome = () => {
  return (
    <section>
      <h1 className="text-5xl">admin</h1>
      <article>
        <CreateRecipe />
      </article>
      <article>
        <AdminRecipe />
      </article>
      <article>
        <CreateEvent />
      </article>
      <article>
        <AdminEvents />
      </article>
    </section>
  );
};

export default AdminHome;
