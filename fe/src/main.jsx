import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import ClientForm from "./components/ClientForm.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import Admin from "./pages/Admin.jsx";

const products = [
  {
    id: 1,
    title: "La-roshe-posay-effaclar-k",
  },
  {
    id: 2,
    title: "Avene-cleanance-gel-nettoyant",
  },
  {
    id: 3,
    title: "Cerave-gel-nettoyant-anti-rugosites",
  },
  {
    id: 4,
    title: "La-roshe-posay-cicaplast-baume-b5",
  },
  {
    id: 5,
    title: "Ceravie-hydrating-facial-cleanser",
  },
  {
    id: 6,
    title: "The-ordinary-hyaluronic-acid-2-b5",
  },
  {
    id: 7,
    title: "Ordinary-niacinamide-10-zinc-1",
  },
];

const pathCreator = (id, title) => `/product/${id}/${title}`;

const productRoutes = products.map((product) => ({
  path: pathCreator(product.id, product.title),
  element: <SingleProduct />,
  loader: () => ({ productId: product.id }),
}));

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/clientform",
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
  ...productRoutes,
  {
    path: "/single-product",
    element: <SingleProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
