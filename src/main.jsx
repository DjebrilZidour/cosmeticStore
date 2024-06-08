import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cerave-anti-rugosités-236ml",
    element: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/cerave-gel-nettoyant-antirugosites-236ml",
  },
  {
    path: "/La-roshe-posay-cicaplast-baume-b5spf50",
    element: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
  },
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
