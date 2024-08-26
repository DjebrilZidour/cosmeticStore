import { Link } from "react-scroll";
import React, { useState } from 'react';
const shippingPrices = {
  'Alger': '400 DZD',
  'Alger Express': '600 DZD',
  'Blida': '600 DZD',
  'Tipaza': '600 DZD',
  'Boumerdes': '600 DZD',
  'Bouira': '650 DZD',
  'Ain Defla': '800 DZD',
  'Medea': '750 DZD',
  'Chlef': '750 DZD',
  'Tissemsilt': '800 DZD',
  'Tiaret': '800 DZD',
  'Relizane': '800 DZD',
  'Mostaghanem': '800 DZD',
  'Oran': '750 DZD',
  'Mascara': '800 DZD',
  'Ain Temouchent': '800 DZD',
  'Tlemcen': '800 DZD',
  'Sidi Bel Abbes': '800 DZD',
  'Saida': '800 DZD',
  'El Oued': '800 DZD',
  'Biskra': '900 DZD',
  'Ouargla': '900 DZD',
  'El Mghaier': '900 DZD',
  'Ouled Djellal': '900 DZD',
  'El Meniaa': '900 DZD',
  'Timimoun': '950 DZD',
  'Tizi Ouzou': '750 DZD',
  'Bejaia': '750 DZD',
  'Jijel': '800 DZD',
  'Bordj Bou Arreridj': '750 DZD',
  'Sétif': '750 DZD',
  'Batna': '750 DZD',
  'Constantine': '750 DZD',
  'Guelma': '800 DZD',
  'M’sila': '850 DZD',
  'Khenchela': '900 DZD',
  'Tebessa': '900 DZD',
  'Oum El Bouaghi': '800 DZD',
  'Mila': '750 DZD',
  'Skikda': '750 DZD',
  'Annaba': '800 DZD',
  'El Tarf': '800 DZD',
  'Souk Ahras': '800 DZD',
  'Laghouat': '900 DZD',
  'Ghardaia': '900 DZD',
  'Djelfa': '900 DZD',
  'Touggourt': '900 DZD',
  'Béchar': '1000 DZD',
  'El-Bayadh': '1000 DZD',
  'Nâama': '1000 DZD',
  'Béni Abbes': '1000 DZD',
  'Adrar': '1100 DZD',
};
const About = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [communes, setCommunes] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    wilaya: '',
    commune: '',
  });
  const [shippingPrice, setShippingPrice] = useState('0 DZD');

  const product = {
    name: 'La Roshe Posay Baume B5 SPF 50',
    price: 3900,
    originalPrice: 4000,
    description: 'A soothing balm that helps with skin repair and protection.',
    imageUrl: 'https://example.com/product-image.jpg', // Replace with actual image URL
  };

  const wilayas = [
    { id: 1, name: 'Alger', communes: ['Alger-Centre', 'El Madania', 'El Harrach', 'El Madania', 'El Mouradia'] },
    { id: 2, name: 'Oran', communes: ['Oran', 'Arzew', 'Bethioua', 'El Ançor', 'El Kerma'] },
    { id: 3, name: 'Constantine', communes: ['Constantine', 'El Khroub', 'Hamma Bouziane', 'Mila', 'Ouled Rahmoun'] },
    { id: 4, name: 'Annaba', communes: ['Annaba', 'El Hadjar', 'Seraïdi', 'El Tarf', 'Ramdane Djamel'] },
    { id: 5, name: 'Tizi Ouzou', communes: ['Tizi Ouzou', 'Azazga', 'Bougie', 'Kabylie', 'El Kseur'] },
    // Add remaining wilayas with their respective communes
  ];

  const handleWilayaChange = (e) => {
    const wilayaId = e.target.value;
    const wilaya = wilayas.find((w) => w.id === parseInt(wilayaId));
    setSelectedWilaya(wilayaId);
    setCommunes(wilaya ? wilaya.communes : []);
    const wilayaName = wilaya ? wilaya.name : '';
    setFormData({ ...formData, wilaya: wilayaName, commune: '' });
    setShippingPrice(shippingPrices[wilayaName] || '0 DZD'); // Set shipping price based on selected wilaya
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

  return (
    <>
         
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <div className="mt-2">
              <span className="text-gray-500 line-through">{product.originalPrice} دج</span>
              <span className="text-red-500 ml-2 text-xl font-bold">{product.price} دج</span>
            </div>
            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Options (if any) */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Options:</h3>
              {/* Add options here if available */}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="w-16 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="^ *(0|\+ *2 *1 *3) *((5|6|7) *(\d *){8}|(4 *9|2 *7|2 *9|3 *2|3 *3|3 *4|2 *5|2 *6|3 *7|4 *3|4 *6|2 *1|2 *3|3 *6|4 *8|3 *8|3 *1|4 *5|3 *5|4 *1|2 *4) *(\d *){6}) *$"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="wilaya">
              Wilaya
            </label>
            <select
              id="wilaya"
              name="wilaya"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="commune">
                Commune
              </label>
              <select
                id="commune"
                name="commune"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Order Now
          </button>
        </form>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
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
    </div>
    <section id="about" className=" flex-col justify-center items-center gap-4 m-4 p-4 my-12 lg:flex-row  lg:flex-reverse">

      <div className="w-full flex justify-center items-center lg:w-1/3">
        <img
          className="rounded-full w-full"
          src="https://i.ibb.co/Mp4BBHb/logo-Djazirat-El-Marra-1.png"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center lg:items-start flex-col w-full p-2 gap-8 lg:w-1/3">
        <h1 className="text-3xl text-red-500 capitalize">why chose us</h1>
        <p className="w-full">
        Bienvenue sur Djazirat El Marra, votre destination pour des soins de la peau de qualité supérieure en Algérie. Nous proposons des produits de marques renommées comme The Ordinary, La Roche-Posay, Cerave et Avene, répondant à tous vos besoins de soins de la peau. Que vous luttiez contre l'acné, la peau sèche ou cherchiez un teint éclatant, nous avons ce qu'il vous faut. Profitez de notre livraison rapide dans les 58 wilayas et d'un service client exceptionnel. Découvrez votre routine parfaite et embarquez pour un voyage vers une peau plus saine et radieuse avec Djazirat El Marra.
        </p>
        <button className="border-2 p-4"><Link to="shop" spy={true} smooth={true} offset={50} duration={500}>Back to shop</Link></button>
      </div>
     
    </section>
    </>
  );
};
export default About;
