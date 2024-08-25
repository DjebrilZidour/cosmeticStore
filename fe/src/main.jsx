import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About.jsx";


const router = createBrowserRouter([
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
    element: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
  },
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
