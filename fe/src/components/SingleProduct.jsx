import { Link } from "react-scroll";
import React, { useState } from "react";
import Navbar from "./Navbar";
import SecNav from "./SecNav";
const shippingPrices = {
  Alger: "400 DZD",
  "Alger Express": "600 DZD",
  Blida: "600 DZD",
  Tipaza: "600 DZD",
  Boumerdes: "600 DZD",
  Bouira: "650 DZD",
  "Ain Defla": "800 DZD",
  Medea: "750 DZD",
  Chlef: "750 DZD",
  Tissemsilt: "800 DZD",
  Tiaret: "800 DZD",
  Relizane: "800 DZD",
  Mostaghanem: "800 DZD",
  Oran: "750 DZD",
  Mascara: "800 DZD",
  "Ain Temouchent": "800 DZD",
  Tlemcen: "800 DZD",
  "Sidi Bel Abbes": "800 DZD",
  Saida: "800 DZD",
  "El Oued": "800 DZD",
  Biskra: "900 DZD",
  Ouargla: "900 DZD",
  "El Mghaier": "900 DZD",
  "Ouled Djellal": "900 DZD",
  "El Meniaa": "900 DZD",
  Timimoun: "950 DZD",
  "Tizi Ouzou": "750 DZD",
  Bejaia: "750 DZD",
  Jijel: "800 DZD",
  "Bordj Bou Arreridj": "750 DZD",
  Sétif: "750 DZD",
  Batna: "750 DZD",
  Constantine: "750 DZD",
  Guelma: "800 DZD",
  "M’sila": "850 DZD",
  Khenchela: "900 DZD",
  Tebessa: "900 DZD",
  "Oum El Bouaghi": "800 DZD",
  Mila: "750 DZD",
  Skikda: "750 DZD",
  Annaba: "800 DZD",
  "El Tarf": "800 DZD",
  "Souk Ahras": "800 DZD",
  Laghouat: "900 DZD",
  Ghardaia: "900 DZD",
  Djelfa: "900 DZD",
  Touggourt: "900 DZD",
  Béchar: "1000 DZD",
  "El-Bayadh": "1000 DZD",
  Nâama: "1000 DZD",
  "Béni Abbes": "1000 DZD",
  Adrar: "1100 DZD",
};
const SingleProduct = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [communes, setCommunes] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    wilaya: "",
    commune: "",
  });
  const [shippingPrice, setShippingPrice] = useState("0 DZD");

  const product = {
    name: "La Roshe Posay Baume B5 SPF 50",
    price: 3900,
    originalPrice: 4000,
    description: "A soothing balm that helps with skin repair and protection.",
    1: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Replace with actual image URL
    2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  };

  const wilayas = [
    {
      id: 1,
      name: "Alger",
      communes: [
        "Alger-Centre",
        "El Madania",
        "El Harrach",
        "El Madania",
        "El Mouradia",
      ],
    },
    {
      id: 2,
      name: "Oran",
      communes: ["Oran", "Arzew", "Bethioua", "El Ançor", "El Kerma"],
    },
    {
      id: 3,
      name: "Constantine",
      communes: [
        "Constantine",
        "El Khroub",
        "Hamma Bouziane",
        "Mila",
        "Ouled Rahmoun",
      ],
    },
    {
      id: 4,
      name: "Annaba",
      communes: ["Annaba", "El Hadjar", "Seraïdi", "El Tarf", "Ramdane Djamel"],
    },
    {
      id: 5,
      name: "Tizi Ouzou",
      communes: ["Tizi Ouzou", "Azazga", "Bougie", "Kabylie", "El Kseur"],
    },
    // Add remaining wilayas with their respective communes
  ];

  const handleWilayaChange = (e) => {
    const wilayaId = e.target.value;
    const wilaya = wilayas.find((w) => w.id === parseInt(wilayaId));
    setSelectedWilaya(wilayaId);
    setCommunes(wilaya ? wilaya.communes : []);
    const wilayaName = wilaya ? wilaya.name : "";
    setFormData({ ...formData, wilaya: wilayaName, commune: "" });
    setShippingPrice(shippingPrices[wilayaName] || "0 DZD"); // Set shipping price based on selected wilaya
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to a server)
  };
  const imgClicked = (clickedimg) => {
    handleImgChanger(clickedimg);
  };
  const handleImgChanger = (img) => {
    // if (img) {
    //     return product.img
    // }else{
    //     return product.img
    // }
    return "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";
  };
  return (
    <>
      <Navbar />

      <section className="flex flex-col md:flex-row w-full ">
        <div className="md:w-1/2 p-16">
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <img className="rounded-xl w-full" src={handleImgChanger()} alt="" />
              <div className="flex md:justify-between justify-center px-6 gap-4 w-full">
                <img
                  className="rounded-xl lg:w-24 md:w-12 w-16 cursor-pointer"
                  onClick={imgClicked(1)}
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <img
                  className="rounded-xl lg:w-24 md:w-12 w-16 cursor-pointer"
                  onClick={imgClicked(2)}
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <img
                  className="rounded-xl lg:w-24 md:w-12 w-16 cursor-pointer"
                  onClick={imgClicked(3)}
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <img
                  className="rounded-xl lg:w-24  md:w-12 w-16 cursor-pointer"
                  onClick={imgClicked(4)}
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gray-50 p-4 rounded-lg md:block hidden">
            <h2 className="text-xl font-semibold text-gray-800">
              Order Summary
            </h2>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{product.price * quantity} دج</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <span>{shippingPrice}</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span>{product.price * quantity + 400} دج</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 p-12">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <div className="mt-2 flex flex-col justify-center items-start">
            <h3 className="text-red-500 line-through">
              {product.originalPrice} دج
            </h3>
            <h2 className="text-green-500 ml-2 text-xl font-bold">
              {product.price} دج
            </h2>
          </div>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Options (if any) */}
          

         
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="flex justify-between  items-center mb-2">
            <div className="">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-16 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
            </div>
            
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                pattern="^ *(0|\+ *2 *1 *3) *((5|6|7) *(\d *){8}|(4 *9|2 *7|2 *9|3 *2|3 *3|3 *4|2 *5|2 *6|3 *7|4 *3|4 *6|2 *1|2 *3|3 *6|4 *8|3 *8|3 *1|4 *5|3 *5|4 *1|2 *4) *(\d *){6}) *$"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="wilaya"
              >
                Wilaya
              </label>
              <select
                id="wilaya"
                name="wilaya"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={selectedWilaya}
                onChange={handleWilayaChange}
                required
              >
                <option value="" disabled selected>
                  Select Wilaya
                </option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya.id} value={wilaya.id}>
                    {wilaya.name}
                  </option>
                ))}
              </select>
            </div>
            {communes.length > 0 && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="commune"
                >
                  Commune
                </label>
                <select
                  id="commune"
                  name="commune"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.commune}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Commune
                  </option>
                  {communes.map((commune, index) => (
                    <option key={index} value={commune}>
                      {commune}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-pink-400 text-white font-semibold py-2 rounded-lg hover:bg-pink-500 transition duration-300"
            >
              Commander Maintenant
            </button>
          </form>
          <div className="mt-8 bg-gray-50 p-4 rounded-lg md:hidden block">
            <h2 className="text-xl font-semibold text-gray-800">
              Order Summary
            </h2>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{product.price * quantity} دج</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <span>{shippingPrice}</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span>{product.price * quantity + 400} دج</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleProduct;
