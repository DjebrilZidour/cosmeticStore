import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import ClientForm from "./components/ClientForm.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import Admin from "./pages/Admin.jsx"

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/clientform ",
    element: <ClientForm />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/La-roshe-posay-cicaplast-baume-b5spf50",
    element:
      "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
  },
  {
    path: "single-product",
    element: <SingleProduct />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
