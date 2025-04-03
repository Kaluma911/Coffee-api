import React from "react";
import AdminEvents from "./events/AdminEvents";
import AdminRecipe from "./recipes/AdminRecipe";

const AdminHome = () => {
  return (
    <section>
      <h1 className="text-5xl">admin</h1>
      <article>
        <AdminRecipe />
      </article>
      <article>
        <AdminEvents />
      </article>
    </section>
  );
};

export default AdminHome;
