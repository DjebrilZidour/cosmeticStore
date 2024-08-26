import { Link } from "react-scroll";
import React, { useState } from "react";
import Navbar from "./Navbar";

import { useLocation } from "react-router-dom";

const products = [
    {
      id: 1,
      title: "La roshe-posay Effaclar K(+)",
      desc: "Ne laissez pas les imperfections vous empêcher de rayonner! Adoptez notre Soin Effaclar K+ de La Roche-Posay dès aujourd'hui et retrouvez une peau saine et équilibrée.",
      img: "https://i.ibb.co/PG5rLjQ/3-copy-2.png",
      star: "https://cdn-icons-png.flaticon.com/128/10801/10801392.png",
      oldPrice: 4500,
      price: 3999,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-rosheposay-effaclar-k",
    },
    {
      id: 2,
      title: "Avéne cleanance gel nettoyant 400 Ml",
      desc: "Ne laissez pas les impuretés ternir votre éclat naturel! Adoptez le Gel Nettoyant Cleanance d'Avene dès aujourd'hui et retrouvez une peau équilibrée et éclatante de santé.",
      img: "https://i.ibb.co/f4g1DvJ/3-copy.png",
      star: "",
      oldPrice: null,
      price: 4499,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/avene-cleanance-gel-nettoyant-400-ml",
    },
    {
      id: 3,
      title: "Cerave Gel Nettoyant Anti-Rugosités​ 236ml",
      desc: "Nettoyant moussant qui favorise l'élimination des rugosités pour une peau lisse",
      img: "https://i.ibb.co/wLC72w8/4.png",
      star: "",
      oldPrice: 4000,
      price: 3500,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/cerave-gel-nettoyant-antirugosites-236ml",
    },
    {
      id: 4,
      title: "La roshe posay Cicaplast Baume B5",
      desc: "Ce baume prend soin de votre peau en profondeur. 💧 Pour des lèvres gercées, des zones sèches ou des petites irritations, le Baume B5 Cicaplast est votre allié de confiance.",
      img: "https://i.ibb.co/D52Qp8c/3.png",
      star: "",
      oldPrice: 4000,
      price: 3900,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
    },
    {
      id: 5,
      title: "Ceravie Hydrating Facial Cleanser 437ml",
      desc: "Il élimine délicatement le maquillage et les impuretés, laissant la peau douce.💙 Pour une expérience agréable, spécialement pour les peaux sensibles et sèches.",
      img: "https://i.ibb.co/0rFVJP1/2.png",
      star: "",
      oldPrice: 4700,
      price: 4300,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/ceravie-hydrating-facial-cleanser",
    },
    {
      id: 6,
      title: "The Ordinary Hyaluronic Acid 2% + B5",
      desc: "Sa texture légère et non grasse pénètre rapidement dans la peau, offrant une hydratation intense et durable. Convient à tous les types de peau, même les plus sensibles.",
      img: "https://i.ibb.co/kqZrTvD/1.png",
      star: "",
      oldPrice: 5600,
      price: 4850,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/the-ordinary-hyluronic-acid-2-b5",
    },
    {
      id: 7,
      title: "Ordinary Niacinamide 10% + Zinc 1%",
      desc: "Ne laissez pas les imperfections ternir votre éclat naturel! Adoptez notre Sérum Niacinamide 10% + Zinc 1% de The Ordinary dès aujourd'hui et retrouvez une peau éclatante de santé.",
      img: "https://i.ibb.co/FKtM3WT/1-copy-3.png",
      star: "",
      oldPrice: 3800,
      price: 3450,
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/the-ordinary-niacinamide-10-zinc-1",
    },
  ];
  
const shippingPrices = {
    "Alger": 400,
    "Alger Express": 600,
    "Blida": 600,
    "Tipaza": 600,
    "Boumerdes": 600,
    "Bouira": 650,
    "Ain Defla": 800,
    "Medea": 750,
    "Chlef": 750,
    "Tissemsilt": 800,
    "Tiaret": 800,
    "Relizane": 800,
    "Mostaghanem": 800,
    "Oran": 750,
    "Mascara": 800,
    "Ain Temouchent": 800,
    "Tlemcen": 800,
    "Sidi Bel Abbes": 800,
    "Saida": 800,
    "El Oued": 800,
    "Biskra": 900,
    "Ouargla": 900,
    "El Mghaier": 900,
    "Ouled Djellal": 900,
    "El Meniaa": 900,
    "Timimoun": 950,
    "Tizi Ouzou": 750,
    "Bejaia": 750,
    "Jijel": 800,
    "Bordj Bou Arreridj": 750,
    "Sétif": 750,
    "Batna": 750,
    "Constantine": 750,
    "Guelma": 800,
    "Msila": 850,
    "Khenchela": 900,
    "Tebessa": 900,
    "Oum El Bouaghi": 800,
    "Mila": 750,
    "Skikda": 750,
    "Annaba": 800,
    "El Tarf": 800,
    "Souk Ahras": 800,
    "Laghouat": 900,
    "Ghardaia": 900,
    "Djelfa": 900,
    "Touggourt": 900,
    "Béchar": 1000,
    "El-Bayadh": 1000,
    "Nâama": 1000,
    "Béni Abbes": 1000,
    "Adrar": 1100,
  };
  
const SingleProduct = (props) => {
    const {state} = useLocation()
    const product = {}

if (props.id > 0) {
    console.log(props.id);
    
}else{
    product = state.props
    
}
    


  const [quantity, setQuantity] = useState(1);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [communes, setCommunes] = useState([]);
  const [clickedProduct, setClickedProduct] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    wilaya: "",
    commune: "",
    clickedProduct: product.title,
  });
  const [shippingPrice, setShippingPrice] = useState(0);

  

  const wilayas = [
    {
        id: 1,
        name: "Adrar",
        communes: [
          "Adrar",
          "Reggane",
          "Aoulef",
          "Bouda",
          "Tsabit"
        ],
      },
      {
        id: 2,
        name: "Chlef",
        communes: [
          "Chlef",
          "Tenes",
          "El Karimia",
          "Oued Fodda",
          "Zeboudja"
        ],
      },
      {
        id: 3,
        name: "Laghouat",
        communes: [
          "Laghouat",
          "Aflou",
          "Brida",
          "El Ghicha",
          "Hassi Delaa"
        ],
      },
      {
        id: 4,
        name: "Oum El Bouaghi",
        communes: [
          "Oum El Bouaghi",
          "Aïn Beïda",
          "Ksar Sbahi",
          "Aïn M'lila",
          "Sigus"
        ],
      },
      {
        id: 5,
        name: "Batna",
        communes: [
          "Batna",
          "Barika",
          "N'Gaous",
          "Timgad",
          "Ras El Aioun"
        ],
      },
      {
        id: 6,
        name: "Béjaïa",
        communes: [
          "Béjaïa",
          "Akbou",
          "Amizour",
          "Sidi Aïch",
          "Tichy"
        ],
      },
      {
        id: 7,
        name: "Biskra",
        communes: [
          "Biskra",
          "Tolga",
          "Sidi Okba",
          "Ouled Djellal",
          "El Kantara"
        ],
      },
      {
        id: 8,
        name: "Béchar",
        communes: [
          "Béchar",
          "Kenadsa",
          "Abadla",
          "Meridja",
          "Igli"
        ],
      },
      {
        id: 9,
        name: "Blida",
        communes: [
          "Blida",
          "Boufarik",
          "Meftah",
          "El Affroun",
          "Soumaa"
        ],
      },
      {
        id: 10,
        name: "Bouira",
        communes: [
          "Bouira",
          "Sour El Ghozlane",
          "Lakhdaria",
          "Kadiria",
          "Haizer"
        ],
      }
    // Add remaining wilayas with their respective communes
  ];

  const handleWilayaChange = (e) => {

    const wilayaId = e.target.value;
    console.log(wilayaId);
    const wilaya = wilayas.find((w) => w.id === parseInt(wilayaId));
    console.log(wilaya);
    setSelectedWilaya(wilayaId);
    setCommunes(wilaya ? wilaya.communes : []);
    const wilayaName = wilaya ? wilaya.name : "";
    setFormData({ ...formData, wilaya: wilayaName, commune: "" });

    setShippingPrice(shippingPrices[wilayaName] || 0 ); // Set shipping price based on selected wilaya
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    setClickedProduct(product.title)
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:1337/product", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => response.json().then((formData) => console.log(formData)));
    };
  
    // fetch("http://localhost:1337/product", {
    //   method: "POST",
    //   body: JSON.stringify(formdata),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => response.json().then((formdata) => console.log(formdata)));
  
    // Handle form submission (e.g., send data to a server)
  
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
 
  
  console.log(product.price);
  const checkOldPrice = (price)=>{
    if (price) {
        return (<p>{price} دج</p>)
    }else{
        return
    }
  }
  return(
    <>
      <Navbar />

      <section className="flex flex-col md:flex-row w-full ">
        <div className="md:w-1/2 p-16">
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <img className="rounded-xl w-full" src={product.img} alt="" />
              <div className="flex md:justify-between justify-center px-6 gap-4 w-full">
                <img
                  className="rounded-xl lg:w-24 md:w-12 w-16 cursor-pointer"
                  onClick={imgClicked(1)}
                  src={product.img}
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
                <span>{shippingPrice}  دج</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span>{(state.props.price * quantity )+ shippingPrice} دج</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 p-12">
          <h1 className="text-2xl font-bold text-gray-800">{state.props.title}</h1>
          <div className="mt-2 flex flex-col justify-center items-start">
            <h3 className="text-red-500 line-through ">
                {checkOldPrice(product.oldPrice)}
              
            </h3>
            <h2 className="text-green-500 ml-2 text-xl font-bold">
              {product.price} دج
            </h2>
          </div>
          <p className="mt-4 text-gray-600">{product.desc}</p>

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
                   {wilaya.id}- {wilaya.name} 
                  </option>
                ))}
              </select>
            </div>
            {communes.length >= 0 && (
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
                  <option value="1" disabled selected>
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
                <span>{shippingPrice}  دج</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span>{product.price * quantity + shippingPrice} دج</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
    

};
export default SingleProduct;
