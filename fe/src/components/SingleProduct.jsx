import { Link } from "react-scroll";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import wilayas from "./utils/wilayas";
import { useLocation } from "react-router-dom";
import shippingPrices from "./utils/shippingPrices";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    title: "La roshe-posay Effaclar K(+)",
    desc: "لا تدع العيوب تمنعك من التألق! استخدم منتج Effaclar K+ من La Roche-Posay اليوم واستمتع ببشرة صحية ومتوازنة.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/PG5rLjQ/3-copy-2.png",
    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "https://cdn-icons-png.flaticon.com/128/10801/10801392.png",
    oldPrice: 4500,
    price: 3999,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-rosheposay-effaclar-k",
  },
  {
    id: 2,
    title: "Avéne cleanance gel nettoyant 400 Ml",
    desc: "لا تدع الشوائب تفسد إشراقتك الطبيعية! استخدم جل التنظيف Cleanance من Avène اليوم واستمتع ببشرة متوازنة ومتألقة.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/f4g1DvJ/3-copy.png",

    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "",
    oldPrice: null,
    price: 4499,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/avene-cleanance-gel-nettoyant-400-ml",
  },
  {
    id: 3,
    title: "Cerave Gel Nettoyant Anti-Rugosités​ 236ml",
    desc: "جل منظف يساعد في إزالة التكتلات للحصول على بشرة ناعمة.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/wLC72w8/4.png",

    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "",
    oldPrice: 4000,
    price: 3500,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/cerave-gel-nettoyant-antirugosites-236ml",
  },
  {
    id: 4,
    title: "La roshe posay Cicaplast Baume B5",
    desc: "هذه المرهم يعنى ببشرتك بعمق. 💧 للشفتين المتشققتين، المناطق الجافة أو التهيجات الصغيرة، يعتبر Baume B5 Cicaplast رفيقك الموثوق.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/D52Qp8c/3.png",

    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "",
    oldPrice: 4000,
    price: 3900,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
  },
  {
    id: 5,
    title: "Ceravie Hydrating Facial Cleanser 437ml",
    desc: "يزيل بلطف المكياج والشوائب، مما يجعل البشرة ناعمة.💙 لتجربة ممتعة، خاصة للبشرة الحساسة والجافة.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/0rFVJP1/2.png",

    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "",
    oldPrice: 4700,
    price: 4300,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/ceravie-hydrating-facial-cleanser",
  },
  {
    id: 6,
    title: "The Ordinary Hyaluronic Acid 2% + B5",
    desc: "تتمتع هذه التركيبة الخفيفة وغير الدهنية بقدرة على التغلغل بسرعة في البشرة، مما يوفر ترطيبًا مكثفًا وطويل الأمد. تناسب جميع أنواع البشرة، حتى الحساسة منها.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/kqZrTvD/1.png",

    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "",
    oldPrice: 5600,
    price: 4850,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/the-ordinary-hyluronic-acid-2-b5",
  },
  {
    id: 7,
    title: "Ordinary Niacinamide 10% + Zinc 1%",
    desc: "لا تدع العيوب تفسد إشراقتك الطبيعية! استخدم سيروم Niacinamide 10% + Zinc 1% من The Ordinary اليوم واستمتع ببشرة صحية ومتألقة.",
    description:
      "شحم الحلب المتلألئ سوبليم تان - 150 ملSOLEIL DES ILES شحم الحلب المتلألئ - SPF 0 - رائحة الجزر - 150 مل غني بمونوي دي تاهيتي المعروف بخصائصه المرطبة والتنعيم ، هذا الشحوم الحلب المرشوشة باللآلئ الذهبية تزين البشرة بانعكاسات ذهبية ومشرقة بشكل طبيعي. تأثير نحاسي. يتسامح بشكل خاص مع البشرة المدبوغة والباهتة.اسم المنتج SOLEIL DES ILES Bron Shimmering Milking GreaseCategory بعد عامنوع المنتج دهن الحلب الخصائص ارماس - عطور عطر الجزرالسعة 150 مل",
    img: "https://i.ibb.co/FKtM3WT/1-copy-3.png",

    img2: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img3: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img4: "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc1:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgdesc2:
      "https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    star: "",
    oldPrice: 3800,
    price: 3450,
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/the-ordinary-niacinamide-10-zinc-1",
  },
];
// Make sure to import animate.css

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Check if the user has scrolled more than the height of the hero section (e.g., 600px)
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
     
      <button className="fixed inset-x-0 bottom-0 bg-pink-400 text-white font-semibold py-2 rounded-lg hover:bg-pink-500 transition duration-300 m-4 text-white text-2xl  animate__animated animate__bounce animate__infinite">
        Commander
      </button>
   
    )
  );
};

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
 
  const [quantity, setQuantity] = useState(1);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [communes, setCommunes] = useState([]);
  const [clickedProduct, setClickedProduct] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const [clickedImg, setClickedImg] = useState(product.img);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    wilaya: "",
    commune: "",
    price: product.price,
    shipping: "",
    total: "",
    product: product.title,
    qte:"",
  });

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
 
  const handleWilayaChange = (e) => {
    const wilayaId = e.target.value;
    console.log(wilayaId);
    const wilaya = wilayas.find((w) => w.id === parseInt(wilayaId));
    console.log(wilaya);
    setSelectedWilaya(wilayaId);
    setCommunes(wilaya ? wilaya.communes : []);
    const wilayaName = wilaya ? wilaya.name : "";
    const totals = product.price * quantity + shippingPrice
    console.log(totals);
    setShippingPrice(shippingPrices[wilayaName] || 0); // Set shipping price based on selected wilaya
    console.log("rhis is it ",hippingPrice);
    setFormData({ ...formData, wilaya: wilayaName, commune: "" , total:totals, shipping:shippingPrice,qte:quantity});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setClickedProduct(product.title);
    e.preventDefault();
    console.log(formData);
    fetch("https://cosmeticstore-2ijr.onrender.com/product", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response.json().then((formData) => console.log(formData))
    );
    navigate("/thank-you");
  };

  const imgClicked = (img) => {
    if (img === 1) {
      setClickedImg(product.img);
    } else if (img === 2) {
      setClickedImg(product.img2);
    } else if (img === 3) {
      setClickedImg(product.img3);
    } else if (img === 4) {
      setClickedImg(product.img4);
    } else if (img === "def") {
      setClickedImg(product.img);
    } else {
      return product.img;
    }
  };

  console.log(product.price);
  const checkOldPrice = (price) => {
    if (price) {
      return <p>{price} دج</p>;
    } else {
      return;
    }
  };

  return (
    <>
      <Navbar />

      <section
        id="buy"
        className="flex flex-col-reverse md:flex-row w-full md:px-24 my-12  justify-center items-center"
      >
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:p-4 md:text-start text-center flex flex-col justify-center items-centemd:items-start">
          <h1 className="md:text-3xl font-bold text-gray-800 text-3xl p-4">
            {product.title}
          </h1>
        
          <div className="mt-2 flex flex-col justify-center md:items-end items-center my-2">
            <h3 className="text-red-500 line-through text-2xl text-right">
              {checkOldPrice(product.oldPrice)}
            </h3>
            <h2 className="text-green-500 ml-2 text-4xl font-bold text-right">
              {product.price} دج
            </h2>
          </div>

          {/* Options (if any) */}

          <form onSubmit={handleSubmit} className="mt-2 md:p-0 px-4">
            <div className="flex flex-col gap-4">
              {/* Quantity Field (Optional) */}
              <div className="flex flex-row-reverse justify-start items-center gap-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="wilaya"
                >
                  :الكمية 
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="w-24 px-4 py-2 border rounded-lg border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              </div>

              {/* Phone Number and Full Name Fields (Required) */}
              <div className="flex justify-center items-center gap-4">
                {/* Phone Number Field */}
                <div className="text-right w-1/2">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    pattern="^ *(0|\+ *2 *1 *3) *((5|6|7) *(\d *){8}|(4 *9|2 *7|2 *9|3 *2|3 *3|3 *4|2 *5|2 *6|3 *7|4 *3|4 *6|2 *1|2 *3|3 *6|4 *8|3 *8|3 *1|4 *5|3 *5|4 *1|2 *4) *(\d *){6}) *$"
                    className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-right text-lg  md:text-2xl"
                    placeholder="رقم الهاتف"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Full Name Field */}
                <div className="text-right w-1/2">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-right text-lg  md:text-2xl"
                    placeholder="الاسم واللقب"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Wilaya and Commune Fields (Required) */}
              <div className="flex justify-center items-center gap-4">
                {/* Commune Field */}
                {communes.length >= 0 && (
                  <div className="w-1/2 text-right">
                    <select
                      id="commune"
                      name="commune"
                      className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-right text-lg  md:text-2xl"
                      value={formData.commune}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled selected>
                        إختر البلدية
                      </option>
                      {communes.map((commune, index) => (
                        <option key={index} value={commune}>
                          {commune}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Wilaya Field */}
                <div className="w-1/2 text-right">
                  <select
                    id="wilaya"
                    name="wilaya"
                    className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-right text-lg  md:text-2xl"
                    value={selectedWilaya}
                    onChange={handleWilayaChange}
                    required
                  >
                    <option value="" disabled selected>
                      إختر الولاية
                    </option>
                    {wilayas.map((wilaya) => (
                      <option key={wilaya.id} value={wilaya.id}>
                        {wilaya.id}- {wilaya.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-pink-400 text-white font-semibold py-2 rounded-lg hover:bg-pink-500 transition duration-300 "
              >
                Commander Maintenant
              </button>
            </div>

            {/* Order Summary */}
            <div className="mt-8 p-4 rounded-lg bg-pink-100">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
              ملخص الطلب
              </h2>
              <div className="mt-2">
                <div className="flex justify-between">
                  <span>{product.price * quantity} دج</span>
                  <span>سعر الطلب</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>{shippingPrice} دج</span>
                  <span>سعر التوصيل</span>
                </div>
                <div className="flex justify-between mt-2 font-bold text-2xl">
                  <span>{product.price * quantity + shippingPrice} دج</span>
                  <span>المجموع</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 md:p-4 p-4">
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                className="rounded-xl w-full m-4 lg:w-5/6"
                src={clickedImg}
                alt=""
              />
              <div className="flex md:justify-center justify-center px-6 gap-4 w-full">
                <img
                  className="rounded-xl  cursor-pointer w-20"
                  onClick={() => imgClicked(1)} // Wrap in an arrow function
                  src={product.img}
                  alt=""
                />
                <img
                  className="rounded-xl  cursor-pointer w-20"
                  onClick={() => imgClicked(2)} // Wrap in an arrow function
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <img
                  className="rounded-xl  cursor-pointer w-20"
                  onClick={() => imgClicked(3)} // Wrap in an arrow function
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <img
                  className="rounded-xl  cursor-pointer w-20"
                  onClick={() => imgClicked(4)} // Wrap in an arrow function
                  src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-rhume-froid-neige-paysage.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-24 px-6 mb-12 my-12 mb-36">
        <div className="flex flex-col justify-center items-end gap-8  ">
          <h1 className="md:text-5xl text-4xl">وصف المنتج</h1>
          <p className="mt-4 text-gray-600 text-lg p-2 text-right">
            {product.desc}
          </p>
          <p className="md:text-2xl text-xl w-full text-end">
            {product.description}
          </p>
          <div className="flex justify-center items-center gap-8">
            <img className="w-1/2" src={product.imgdesc1} alt="" />
            <img className="w-1/2" src={product.imgdesc2} alt="" />
          </div>
        </div>
      </section>

      <Link to="buy" spy={true} smooth={true} offset={50} duration={500}>
        <ScrollButton />
      </Link>
    </>
  );
};

export default SingleProduct;
