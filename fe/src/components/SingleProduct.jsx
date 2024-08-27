import { Link } from "react-scroll";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

const shippingPrices = {
  "الجزائر": 400,
  "الجزائر إكسبريس": 600,
  "البليدة": 600,
  "تيبازة": 600,
  "بومرداس": 600,
  "البويرة": 650,
  "عين الدفلى": 800,
  "مدية": 750,
  "الشلف": 750,
  "تيسمسيلت": 800,
  "تيارت": 800,
  "الريليزان": 800,
  "مستغانم": 800,
  "وهران": 750,
  "مسكرة": 800,
  "عين تموشنت": 800,
  "تلمسان": 800,
  "سيدي بلعباس": 800,
  "سعيدة": 800,
  "الوادي": 800,
  "بسكرة": 900,
  "ورقلة": 900,
  "المغير": 900,
  "أولاد جلال": 900,
  "المنيعة": 900,
  "تيميمون": 950,
  "تيزي وزو": 750,
  "بجاية": 750,
  "جيجل": 800,
  "برج بوعريريج": 750,
  "سطيف": 750,
  "باتنة": 750,
  "قسنطينة": 750,
  "قالمة": 800,
  "مسيلة": 850,
  "خنشلة": 900,
  "تبسة": 900,
  "أم البواقي": 800,
  "ميلة": 750,
  "سكيكدة": 750,
  "عنابة": 800,
  "الطارف": 800,
  "سوق أهراس": 800,
  "الأغواط": 900,
  "غرداية": 900,
  "الجلفة": 900,
  "توقرت": 900,
  "بشار": 1000,
  "البيضاء": 1000,
  "النعامة": 1000,
  "بني عباس": 1000,
  "أدرار": 1100,
};

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

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [communes, setCommunes] = useState([]);
  const [clickedProduct, setClickedProduct] = useState("");
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
      name: "أدرار",
      communes: [
        "تيمقتن",
        "بودة",
        "أولاد أحمد تيمي",
        "أدرار",
        "فنوغيل",
        "إن زغمير",
        "رقان",
        "سالي",
        "السبع",
        "تسابيت",
        "تامست",
        "تامنطيط",
        "تيت",
        "زاوية كنتة",
        "اقبلي",
        "أولف",
      ],
    },

    {
      id: 2,
      name: "الشلف",
      communes: [
        "تلعصة",
        "الزبوجة",
        "أولاد عباس",
        "بني راشد",
        "الهرانفة",
        "تاجنة",
        "المرسى",
        "الشلف",
        "سنجاس",
        "سيدي عبد الرحمن",
        "سيدي عكاشة",
        "تنس",
        "الكريمية",
        "حرشون",
        "تاوقريت",
        "بني حواء",
        "أبو الحسن",
        "وادي قوسين",
        "الشطية",
        "مصدق",
        "أولاد فارس",
        "بوقادير",
        "وادي سلي",
        "الحجاج",
        "أولاد بن عبد القادر",
        "عين مران",
        "بريرة",
        "وادي الفضة",
        "أم الدروع",
        "بني بوعتاب",
        "بوزغاية",
        "الصبحة",
        "بنايرية",
        "الأبيض مجاجة",
      ],
    },
    {
      id: 3,
      name: "الأغواط",
      communes: [
        "سبقاق",
        "سيدي بوزيد",
        "وادي مرة",
        "وادي مزي",
        "العسافية",
        "سيدي مخلوف",
        "حاسي الدلاعة",
        "حاسي الرمل",
        "عين ماضي",
        "الحويطة",
        "الخنق",
        "بن ناصر بن شهرة",
        "أفلو",
        "الأغواط",
        "قصر الحيران",
        "البيضاء",
        "قلتة سيدي سعد",
        "بريدة",
        "عين سيدي علي",
        "تاجموت",
        "الحاج مشري",
        "تاويالة",
        "الغيشة",
        "تاجرونة",
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
        "Sigus",
      ],
    },
    {
      id: 5,
      name: "باتنة",
      communes: [
        "معافة",
        "القصبات",
        "تيمقاد",
        "تاكسلانت",
        "أولاد سي سليمان",
        "تالخمت",
        "رأس العيون",
        "الرحبات",
        "أولاد سلام",
        "القيقبة",
        "ثنية العابد",
        "باتنة",
        "فسديس",
        "وادي الشعبة",
        "حيدوسة",
        "قصر بلزمة",
        "مروانة",
        "وادي الماء",
        "لازرو",
        "سريانة",
        "زانة البيضاء",
        "منعة",
        "تغرغار",
        "عين ياقوت",
        "بومية",
        "جرمة",
        "المعذر",
        "عيون العصافير",
        "تازولت",
        "بومقر",
        "نقاوس",
        "سفيان",
        "أريس",
        "تيغانمين",
        "عين جاسر",
        "الحاسي",
        "سقانة",
        "تيلاطو",
        "فم الطوب",
        "إشمول",
        "إينوغيسن",
        "بوزينة",
        "لارباع",
        "بولهيلات",
        "الشمرة",
        "بريكة",
        "بيطام",
        "الجزار",
        "أولاد عمار",
        "غسيرة",
        "كيمل",
        "عين التوتة",
        "بني فضالة الحقانية",
        "أولاد فاضل",
        "أولاد عوف",
        "شير",
        "وادي الطاقة",
        "Tkout",
        "Amdoukal",
        "Lemsane",
        "Metkaouak",
      ],
    },
    {
      id: 6,
      name: "بجاية",
      communes: [
        "سيدي عياد",
        "برباشة",
        "الفلاي",
        "كنديرة",
        "سيدي عيش",
        "تيفرة",
        "القصر",
        "توجة",
        "خراطة",
        "بجاية",
        "وادي غير",
        "بني معوش",
        "بني جليل",
        "فرعون",
        "سمعون",
        "تيمزريت",
        "مالبو",
        "سوق لإثنين",
        "تامريجت",
        "بوخليفة",
        "تالة حمزة",
        "تيشي",
        "أيت رزين",
        "إغيل علي",
        "أيت إسماعيل",
        "درقينة",
        "تاسكريوت",
        "أوقاس",
        "تيزي نبربر",
        "أدكار",
        "بني كسيلة",
        "تاوريرت إغيل",
        "أقبو",
        "شلاطة",
        "اغرم",
        "تامقرة",
        "أمالو",
        "بوحمزة",
        "مسيسنة",
        "صدوق",
        "بني مليكش",
        "بو جليل",
        "تازمالت",
        "أكفادو",
        "شميني",
        "سوق اوفلا",
        "طيبان",
        "أوزلاقن",
        "أميزور",
        "Thinabdher",
        "Ifelain Ilmathen",
        "Draa Kaid",
      ],
    },
    {
      id: 7,
      name: "بسكرة",
      communes: [
        "الفيض",
        "ليشانة",
        "بوشقرون",
        "مخادمة",
        "جمورة",
        "برانيس",
        "الوطاية",
        "القنطرة",
        "خنقة سيدي ناجي",
        "عين زعطوط",
        "زريبة الوادي",
        "المزيرعة",
        "بسكرة",
        "الحاجب",
        "مليلي",
        "فوغالة",
        "الغروس",
        "برج بن عزوز",
        "أورلال",
        "أوماش",
        "عين الناقة",
        "شتمة",
        "الحوش",
        "سيدي عقبة",
        "مشونش",
        "ليوة",
        "طولقة",
      ],
    },
    {
      id: 8,
      name: "بشار",
      communes: [
        "بشار",
        "بوكايس",
        "لحمر",
        "موغل",
        "المريجة",
        "تاغيت",
        "العبادلة",
        "عرق فراج",
        "بني ونيف",
        "القنادسة",
        "Mechraa Houari B",
      ],
    },
    {
      id: 9,
      name: "البليدة",
      communes: [
        "بني مراد",
        "اولاد سلامة",
        "موزاية",
        "حمام ملوان",
        "بوقرة",
        "صوحان",
        "الأربعاء",
        "الصومعة",
        "قرواو",
        "بوفاريك",
        "مفتاح",
        "الشفة",
        "عين الرمانة",
        "وادي جر",
        "العفرون",
        "أولاد يعيش",
        "الشريعة",
        "جبابرة",
        "وادي العلايق",
        "بن خليل",
        "بني تامو",
        "الشبلي",
        "بوعينان",
        "بوعرفة",
      ],
    },
    {
      id: 10,
      name: "البويرة",
      communes: [
        "عين العلوي",
        "الحجرة الزرقاء",
        "مزدور",
        "تاقديت",
        "ريدان",
        "المعمورة",
        "الحاكمية",
        "أهل القصر",
        "ديرة",
        "الدشمية",
        "بشلول",
        "آث منصور",
        "سحاريج",
        "العجيبة",
        "الأسنام",
        "أمشدالة",
        "برج أوخريص",
        "سور الغزلان",
        "حنيف",
        "شرفة",
        "أولاد راشد",
        "عين الحجر",
        "أغبالو",
        "روراوة",
        "الخبوزية",
        "بئر غبالو",
        "البويرة",
        "عين الترك",
        "أيت لعزيز",
        "عين بسام",
        "المقراني",
        "سوق الخميس",
        "الهاشمية",
        "حيزر",
        "تاغزوت",
        "معلة",
        "وادي البردي",
        "أعمر",
        "الأخضرية",
        "بوكرم",
        "قرومة",
        "قادرية",
        "جباحية",
        "بودربالة",
        "Zbarbar",
      ],
    },
    {
      id: 12,
      name: "تبسة",
      communes: [
        "العوينات",
        "فركان",
        "نقرين",
        "بئر مقدم",
        "بئر الذهب",
        "صفصاف الوسرى",
        "قريقر",
        "بكارية",
        "بولحاف الدير",
        "أم علي",
        "بوخضرة",
        "الونزة",
        "المريج",
        "عين الزرقاء",
        "سطح قنطيس",
        "العقلة",
        "المزرعة",
        "بجن",
        "مرسط",
        "ثليجان",
        "الشريعة",
        "العقلة المالحة",
        "بئر العاتر",
        "تبسة",
        "الحمامات",
        "الكويف",
        "Lahouidjbet",
        "El Ma El Biodh",
      ],
    },
    {
      id: 13,
      name: "تلمسان",
      communes: [
        "باب العسة",
        "تيرني بني هديل",
        "منصورة",
        "بني مستر",
        "عين غرابة",
        "شتوان",
        "عمير",
        "عين فزة",
        "هنين",
        "سيدي الجيلالي",
        "البويهي",
        "ندرومة",
        "مسيردة الفواقة",
        "مرسى بن مهيدي",
        "سيدي مجاهد",
        "بني بوسعيد",
        "سبدو",
        "القور",
        "العريشة",
        "بوحلو",
        "مغنية",
        "حمام بوغرارة",
        "زناتة",
        "أولاد رياح",
        "الحناية",
        "سيدي العبدلي",
        "سوق الثلاثاء",
        "بن سكران",
        "فلاوسن",
        "عين الكبيرة",
        "عين فتاح",
        "تلمسان",
        "عين النحالة",
        "عين تالوت",
        "عين يوسف",
        "بني وارسوس",
        "الفحول",
        "الرمشي",
        "سبعة شيوخ",
        "السواني",
        "صبرة",
        "دار يغمراسن",
        "الغزوات",
        "السواحلية",
        "تيانت",
        "بني صميل",
        "أولاد ميمون",
        "بني بهدل",
        "بني سنوس",
        "العزايل",
        "جبالة",
        "Oued Chouly",
        "Souk El Khemis",
      ],
    },
    {
      id: 14,
      name: "تيارت",
      communes: [
        "مهدية",
        "عين دزاريت",
        "السبعين",
        "الفايجة",
        "سي عبد الغني",
        "السوقر",
        "توسنينة",
        "مغيلة",
        "السبت",
        "سيدي حسني",
        "عين الحديد",
        "فرندة",
        "تخمرت",
        "عين كرمس",
        "مادنة",
        "سيدي عبد الرحمن",
        "قصر الشلالة",
        "قرطوفة",
        "سرغين",
        "زمالة الأمير عبد القادر",
        "وادي ليلي",
        "سيدي علي ملال",
        "جيلالي بن عمار",
        "مشرع الصفا",
        "تاقدمت",
        "بوقرة",
        "حمادية",
        "الرشايقة",
        "تيدة",
        "الناظورة",
        "تيارت",
        "مدروسة",
        "ملاكو",
        "سيدي بختي",
        "عين الذهب",
        "شحيمة",
        "النعيمة",
        "عين بوشقيف",
        "دحموني",
        "الرحوية",
        "Ouled Djerad",
      ],
    },
    {
      id: 15,
      name: "تيزي وزو",
      communes: [
        "ميزرانـــة",
        "إيجــار",
        "بني دوالة",
        "بني زيكــي",
        "إيلولة أومـــالو",
        "أيت بــوادو",
        "واضية",
        "تيزي نثلاثة",
        "أغريب",
        "أيت شافع",
        "أقرو",
        "أزفون",
        "إفليـــسن",
        "تيقـزيرت",
        "أسي يوسف",
        "بوغني",
        "بونوح",
        "مشطراس",
        "ذراع بن خدة",
        "سيدي نعمان",
        "تادمايت",
        "تيرمتين",
        "أيت بومهدي",
        "أيت تودرت",
        "بني عيسي",
        "واسيف",
        "أيت خليلي",
        "مقــلع",
        "صوامـــع",
        "بني يني",
        "إبودرارن",
        "تيزي وزو",
        "أبي يوسف",
        "عين الحمام",
        "أيت يحيى",
        "اقبيل",
        "بوجيمة",
        "ماكودة",
        "عين الزاوية",
        "أيت يحي موسى",
        "ذراع الميزان",
        "فريقات",
        "مكيرة",
        "تيزي غنيف",
        "يطــافن",
        "إيلـيــلتـن",
        "إمســوحال",
        "عزازقة",
        "فريحة",
        "إيفيغاء",
        "إعــكورن",
        "زكري",
        "أيت عقـواشة",
        "إيرجـــن",
        "الأربعــاء ناث إيراثن",
        "أيت أومالو",
        "تيزي راشد",
        "أيت عيسى ميمون",
        "واقنون",
        "تيمـيزار",
        "معـــاتقة",
        "سوق الإثنين",
        "أيت محمود",
        "بنــــي زمنزار",
        "إفــرحــونان",
        "بوزقــن",
        "Aghni Goughran",
      ],
    },
    {
      id: 16,
      name: "الجزائر العاصمة",
      communes: [
        "حسين داي",
        "الكاليتوس",
        "سيدي موسى",
        "المحمدية",
        "جسر قسنطينة",
        "عين طاية",
        "باب الزوار",
        "بئر توتة",
        "اولاد شبل",
        "تسالة المرجة",
        "هراوة",
        "رغاية",
        "المعالمة",
        "الرحمانية",
        "سويدانية",
        "سطاوالي",
        "زرالدة",
        "بابا حسن",
        "الدويرة",
        "الدرارية",
        "العاشور",
        "الخرايسية",
        "عين بنيان",
        "الشراقة",
        "دالي ابراهيم",
        "اولاد فايت",
        "الجزائر الوسطى",
        "المدنية",
        "المرادية",
        "سيدي امحمد",
        "السحاولة",
        "بولوغين بن زيري",
        "القصبة",
        "وادي قريش",
        "الرايس حميدو",
        "بئر مراد رايس",
        "بئر خادم",
        "حيدرة",
        "ابن عكنون",
        "بني مسوس",
        "بوزريعة",
        "الابيار",
        "باش جراح",
        "بوروبة",
        "براقي",
        "باب الوادي",
        "برج الكيفان",
        "القبة",
        "الرويبة",
        "الحراش",
        "الدار البيضاء",
        "المرسى",
        "برج البحري",
        "المغارية",
        "وادي السمار",
        "Bains Romains",
        "Hamma Anassers",
      ],
    },
    {
      id: 17,
      name: "الجلفة",
      communes: [
        "حاسي العش",
        "عين الإبل",
        "القديد",
        "الشارف",
        "سيدي بايزيد",
        "مليليحة",
        "دار الشيوخ",
        "تعظميت",
        "حد الصحاري",
        "بويرة الأحداب",
        "عين فقه",
        "سيدي لعجال",
        "حاسي فدول",
        "الخميس",
        "سلمانة",
        "سد الرحال",
        "مسعد",
        "قطارة",
        "دلدول",
        "زكار",
        "دويس",
        "الادريسية",
        "عين الشهداء",
        "الجلفة",
        "بيرين",
        "أم العظام",
        "فيض البطمة",
        "عمورة",
        "زعفران",
        "قرنيني",
        "عين وسارة",
        "بنهار",
        "عين معبد",
        "حاسي بحبح",
        "مجبارة",
        "Beni Yacoub",
      ],
    },
    {
      id: 18,
      name: "جيجل",
      communes: [
        "جيجل",
        "العوانة",
        "سلمى بن زيادة",
        "بوسيف أولاد عسكر",
        "زيامة منصورية",
        "الشحنة",
        "الامير عبد القادر",
        "وجانة",
        "الطاهير",
        "الشقفة",
        "القنار نشفي",
        "سيدي عبد العزيز",
        "الميلية",
        "أولاد يحيى خدروش",
        "أولاد رابح",
        "سيدي معروف",
        "غبالة",
        "السطارة",
        "بوراوي بلهادف",
        "العنصر",
        "خيري واد عجول",
        "جيملة",
        "قاوس",
        "تاكسنة",
        "برج الطهر",
        "بودريعة بني ياجيس",
        "الجمعة بني حبيبي",
        "Erraguene"
      ]
    }
,    
    {
      id: 28,
      name: "Timimoun",
      communes: [
        "Timimoun",
        "Ouled Saïd",
        "Tinerkouk",
        "Ksar Kaddour",
        "Charouine",
        "Ouled Aïssa",
        "Talmine",
        "Aougrout",
        "Métarfa",
        "Deldoul",
      ],
    },
    {
      id: 35,
      name: "Boumerdès",
      communes: [
        "Afir",
        "Ammal",
        "Baghlia",
        "Ben Choud",
        "Beni Amrane",
        "Bordj Menaïel",
        "Boudouaou",
        "Boudouaou El Bahri",
        "Boumerdès",
        "Bouzegza Keddara",
        "Chabet el Ameur",
        "Corso",
        "Dellys",
        "Djinet",
        "El Kharrouba",
        "Hammedi",
        "Isser",
        "Khemis El Khechna",
        "Larbatache",
        "Leghata",
        "Naciria",
        "Ouled Aïssa",
        "Ouled Hedadj",
        "Ouled Moussa",
        "Si Mustapha",
        "Sidi Daoud",
        "Souk El Had",
        "Taourga",
        "Thénia",
        "Tidjelabine",
        "Timezrit",
        "Zemmouri",
      ],
    },
    {
      id: 43,
      name: "أم البواقي",
      communes: [
        "فكيرينة",
        "الفجوج بوغرارة سعودي",
        "عين فكرون",
        "الرحية",
        "مسكيانة",
        "البلالة",
        "بحير الشرقي",
        "قصر الصباحي",
        "سوق نعمان",
        "أولاد زواي",
        "أم البواقي",
        "عين ببوش",
        "عين الزيتون",
        "بئر الشهداء",
        "عين البيضاء",
        "بريش",
        "الزرق",
        "عين مليلة",
        "أولاد قاسم",
        "أولاد حملة",
        "العامرية",
        "سيقوس",
        "وادي نيني",
        "عين الديس",
        "الضلعة",
        "الجازية",
        "عين كرشة",
        "الحرملية",
        "هنشير تومغني",
      ],
    },
    {
      id: 44,
      name: "Tipaza",
      communes: [
        "Aghbal",
        "Ben Chicao",
        "Cherchell",
        "Douaouda",
        "Hadjout",
        "Koléa",
        "Larbatnath",
        "Mahelma",
        "Meftah",
        "Nador",
        "Sidi Amar",
        "Sidi Ghiles",
        "Sidi Rached",
        "Souk Tleta",
        "Tacheda",
        "Tamentfoust",
        "Thenia",
        "Tipaza",
        "Zéralda",
      ],
    },
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

    setShippingPrice(shippingPrices[wilayaName] || 0); // Set shipping price based on selected wilaya
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

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
                <span>{shippingPrice} دج</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span>{product.price * quantity + shippingPrice} دج</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 p-12">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
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
                <span>{shippingPrice} دج</span>
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
  );
};
export default SingleProduct;
