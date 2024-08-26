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
const SingleProduct= (props)=>{
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
return(
    <>
    </>
)
}
export default SingleProduct