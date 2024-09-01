import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const LOCAL_STORAGE_KEYS = {
    isLogged: "isUserLoggedIn",
  };

  const getIsUserLogged = () => {
    const isUserLogged = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.isLogged)
    );
    return typeof isUserLogged === "boolean" ? isUserLogged : false;
  };

  const isUserLogged = getIsUserLogged();

  if (!isUserLogged) {
    navigate("/admin-verification");
  }

  const [myCommands, setMyCommands] = useState([]);

  useEffect(() => {
    const getCommands = async () => {
      const response = await fetch(
        "https://cosmeticstore-2ijr.onrender.com/product",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      setMyCommands(responseData.data);
    };

    getCommands();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Client Orders
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-2 text-left">Name</th>
              <th className="py-3 px-2 text-left">Phone</th>
              <th className="py-3 px-2 text-left">Product</th>
              <th className="py-3 px-2 text-left">Qte</th>
              <th className="py-3 px-2 text-left">Wilaya</th>
              <th className="py-3 px-2 text-left">Commune</th>
              <th className="py-3 px-2 text-left">Price</th>
              <th className="py-3 px-2 text-left">Shipping Price</th>
              <th className="py-3 px-2 text-left">Order Time</th>
              <th className="py-3 px-2 text-left">total</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {myCommands.map((command, index) =>(
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-2 text-left whitespace-nowrap">
                  {command.name}
                </td>
                <td className="py-3 px-2 text-left">{command.phone}</td>
                <td className="py-3 px-2 text-left">{command.product}</td>
                <td className="py-3 px-2 text-left">{command.qte}</td>
                <td className="py-3 px-2 text-left">{command.wilaya}</td>
                <td className="py-3 px-2 text-left">{command.commune}</td>
                <td className="py-3 px-2 text-left">{command.price} DA</td>
                <td className="py-3 px-2 text-left">
                  {command.shippingPrice} DA
                </td>
                <td className="py-3 px-2 text-left">{command.orderTime}</td>
                <td className="py-3 px-2 text-left">{command.price * command.qte + command.shippingPrice} DA</td>
                <td className="flex justify-center items-center gap-4 bg-red-100">
                  {" "}
                  <button>approuve </button>
                  <button>recall</button>
                  <button>cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
