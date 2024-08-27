import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import ClientForm from "./components/ClientForm.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import Admin from "./pages/Admin.jsx";
import AdminVer from "./pages/AdminVer.jsx";

// Product list
const products = [
  {
    id: 1,
    title: "la-roshe-posay-effaclar-k",
  },
  {
    id: 2,
    title: "avene-cleanance-gel-nettoyant",
  },
  {
    id: 3,
    title: "cerave-gel-nettoyant-anti-rugosites",
  },
  {
    id: 4,
    title: "la-roshe-posay-cicaplast-baume-b5",
  },
  {
    id: 5,
    title: "ceravie-hydrating-facial-cleanser",
  },
  {
    id: 6,
    title: "the-ordinary-hyaluronic-acid-2-b5",
  },
  {
    id: 7,
    title: "ordinary-niacinamide-10-zinc-1",
  },
];

// Function to create product-specific paths
const pathCreator = (id, title) => `/${id}`;

// Dynamically creating routes for each product
const productRoutes = products.map((product) => ({
  path: pathCreator(product.id, product.title),
  element: <SingleProduct  />,
  loader: () => ({ productId: product.id }),
}));

// Router configuration
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin-verification",
    element: <AdminVer />
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
  {
    path: "/products/:id/:title",
    element: <SingleProduct products={products} />, // Pass products as prop
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
