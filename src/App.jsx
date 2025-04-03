import React from "react";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AdminLayout from "./layout/admin/AdminLayout";
import PrivatRoute from "./layout/admin/PrivatRoute";
import Layout from "./layout/Layout";
import About from "./pages/About";
import AdminHome from "./pages/admin/AdminHome";
import CreateEvent from "./pages/admin/events/CreateEvent";
import EditEvent from "./pages/admin/events/EditEvent";
import Login from "./pages/admin/Login";
import CreateRecipe from "./pages/admin/recipes/CreateRecipe";
import EditRecipe from "./pages/admin/recipes/EditRecipe";
import Events from "./pages/events/Events";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound ";
import Recipes from "./pages/recipes/Recipes";
import RecipesSearch from "./pages/recipes/RecipesSearch";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        /*------------------- Public -------------------*/
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "recipes", element: <Recipes /> },
        { path: "events", element: <Events /> },
        { path: "recipesearch/:searchkey", element: <RecipesSearch /> },
      ],
    },
    {
      element: (
        <PrivatRoute>
          <AdminLayout />
        </PrivatRoute>
      ),
      errorElement: <PageNotFound />,
      children: [
        /*------------------- Admin -------------------*/
        { path: "admin", element: <AdminHome /> },
        { path: "admin/createevent", element: <CreateEvent /> },
        { path: "admin/createrecipe", element: <CreateRecipe /> },
        { path: "admin/editrecipe/:id", element: <EditRecipe /> },
        { path: "admin/editevent/:id", element: <EditEvent /> },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
