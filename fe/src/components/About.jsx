import { Link } from "react-scroll";
import React, { useState } from 'react';
const shippingPrice = {
  Alger: '400',
  AlgerExpress: '600',
  Blida: '600',
  Tipaza: '600',
  Boumerdes: '600',
  Bouira: '650',
  AinDefla: '800',
  Medea: '750',
  Chlef: '750',
  Tissemsilt: '800',
  Tiaret: '800',
  Relizane: '800',
  Mostaghanem: '800',
  Oran: '750',
  Mascara: '800',
  AinTemouchent: '800',
  Tlemcen: '800',
  SidiBelAbbes: '800',
  Saida: '800',
  ElOued: '800',
  Biskra: '900',
  Ouargla: '900',
  ElMghaier: '900',
  OuledDjellal: '900',
  ElMeniaa: '900',
  Timimoun: '950',
  TiziOuzou: '750',
  Bejaia: '750',
  Jijel: '800',
  BordjBouArreridj: '750',
  Setif: '750',
  Batna: '750',
  Constantine: '750',
  Guelma: '800',
  Msila: '850',
  Khenchela: '900',
  Tebessa: '900',
  OumElBouaghi: '800',
  Mila: '750',
  Skikda: '750',
  Annaba: '800',
  ElTarf: '800',
  SoukAhras: '800',
  Laghouat: '900',
  Ghardaia: '900',
  Djelfa: '900',
  Touggourt: '900',
  Bechar: '1000',
  ElBayadh: '1000',
  Naama: '1000',
  BeniAbbes: '1000',
  Adrar: '1100',
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

  // Define the shipping prices
  

  const products = [
    {
      title: "La Roche-Posay Effaclar K(+)",
      desc: "Ne laissez pas les imperfections vous empêcher de rayonner! Adoptez notre Soin Effaclar K+ de La Roche-Posay dès aujourd'hui et retrouvez une peau saine et équilibrée.",
      img: "https://i.ibb.co/PG5rLjQ/3-copy-2.png",
      star: "https://cdn-icons-png.flaticon.com/128/10801/10801392.png",
      oldPrice: "4500 DZD",
      price: "3999 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-rosheposay-effaclar-k",
    },
    {
      title: "Avéne Cleanance Gel Nettoyant 400 ml",
      desc: "Ne laissez pas les impuretés ternir votre éclat naturel! Adoptez le Gel Nettoyant Cleanance d'Avene dès aujourd'hui et retrouvez une peau équilibrée et éclatante de santé.",
      img: "https://i.ibb.co/f4g1DvJ/3-copy.png",
      star: "",
      oldPrice: "",
      price: "4499 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/avene-cleanance-gel-nettoyant-400-ml",
    },
    {
      title: "Cerave Gel Nettoyant Anti-Rugosités​ 236 ml",
      desc: "Nettoyant moussant qui favorise l'élimination des rugosités pour une peau lisse",
      img: "https://i.ibb.co/wLC72w8/4.png",
      star: "",
      oldPrice: "4000 DZD",
      price: "3500 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/cerave-gel-nettoyant-antirugosites-236ml",
    },
    {
      title: "La Roche-Posay Cicaplast Baume B5",
      desc: "Ce baume prend soin de votre peau en profondeur. 💧 Pour des lèvres gercées, des zones sèches ou des petites irritations, le Baume B5 Cicaplast est votre allié de confiance.",
      img: "https://i.ibb.co/D52Qp8c/3.png",
      star: "",
      oldPrice: "4000 DZD",
      price: "3900 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
    },
    {
      title: "Ceravie Hydrating Facial Cleanser 437 ml",
      desc: "Il élimine délicatement le maquillage et les impuretés, laissant la peau douce. 💙 Pour une expérience agréable, spécialement pour les peaux sensibles et sèches.",
      img: "https://i.ibb.co/0rFVJP1/2.png",
      star: "",
      oldPrice: "4700 DZD",
      price: "4300 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/ceravie-hydrating-facial-cleanser",
    },
    {
      title: "The Ordinary Hyaluronic Acid 2% + B5",
      desc: "Sa texture légère et non grasse pénètre rapidement dans la peau, offrant une hydratation intense et durable. Convient à tous les types de peau, même les plus sensibles.",
      img: "https://i.ibb.co/kqZrTvD/1.png",
      star: "",
      oldPrice: "5600 DZD",
      price: "4850 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/the-ordinary-hyluronic-acid-2-b5",
    },
    {
      title: "Ordinary Niacinamide 10% + Zinc 1%",
      desc: "Ne laissez pas les imperfections ternir votre éclat naturel! Adoptez notre Sérum Niacinamide 10% + Zinc 1% de The Ordinary dès aujourd'hui et retrouvez une peau éclatante de santé.",
      img: "https://i.ibb.co/FKtM3WT/1-copy-3.png",
      star: "",
      oldPrice: "3800 DZD",
      price: "3450 DZD",
      link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/the-ordinary-niacinamide-10-zinc-1",
    },
  ];
  

  const wilayas = [
    { id: 1, name: 'أدرار', communes: ['أدرار', 'تيميمون', 'زاوية كنتة', 'بني زيد', 'بوسمغون', 'الفيضة', 'فنوغيل', 'البرج', 'السبع', 'بني عباس', 'سالي', 'اولف', 'رشيد', 'أولاد سعيد', 'القيطنة', 'آلتك', 'أملال', 'براك', 'أمجدل'] },
    { id: 2, name: 'الشلف', communes: ['الشلف', 'أولاد فارس', 'العاصمة', 'بوعمامة', 'الشافعة', 'بنود', 'القليعة', 'وادي سلي', 'المرسى', 'سيدي عبد الرحمن', 'حسنية', 'تنزروفت', 'بوقادير', 'سبع', 'سيدي نعمان', 'تيجي', 'الشرقية', 'سيدي عكاشة', 'الدويرة', 'القنادسة'] },
    { id: 3, name: 'الأغواط', communes: ['الأغواط', 'عين البيضاء', 'سيدي علي', 'قصر البخاري', 'إدماسن', 'بريكة', 'أرزي', 'الراشدية', 'الطفيل', 'ملوزة', 'دلس', 'وادي الزر', 'الناظور', 'عين الدفلى', 'العرائش', 'أولاد سيدي', 'بني معوش', 'سيدي مبروك', 'سيدي قاسم', 'بريكة'] },
    { id: 4, name: 'أم البواقي', communes: ['أم البواقي', 'عين البيضاء', 'سيدي أمين', 'فيسخ', 'سيدي قاسم', 'خنشلة', 'أولاد زواوي', 'بومهدي', 'القرية', 'غرف', 'سيدي عيسى', 'درياس', 'بني بويحي', 'العرقوب', 'باتنة', 'أم العظمة', 'بوابو', 'بومرغن', 'عين الخضراء', 'برباشة'] },
    { id: 5, name: 'باتنة', communes: ['باتنة', 'تيمقاد', 'بريكة', 'عين ياقوت', 'تازولت', 'عين التوتة', 'سوق نتر', 'المسيلة', 'المالح', 'بومهدي', 'وادي الشعبة', 'الشيخ أمين', 'أخضر', 'سيدي عيسى', 'عين الغربي', 'الأوراس', 'بوخضرة', 'البرج', 'الحامة', 'بريكة'] },
    { id: 6, name: 'بجاية', communes: ['بجاية', 'خراطة', 'سيدي عيسى', 'الناصرية', 'الملعب', 'سيدي نعمان', 'الشريعة', 'تادمايت', 'بني ياجيس', 'أقبو', 'بني مالك', 'أسول', 'تالة إيفرا', 'سيدي عبد العزيز', 'إيغيل', 'بومعز', 'الراشدي', 'بني حبيبي', 'الجميلة'] },
    { id: 7, name: 'بسكرة', communes: ['بسكرة', 'سيدي خالد', 'جليدة', 'نقرين', 'الشلالة', 'القصر', 'أولاد يعيش', 'بجاوي', 'الورقة', 'النقطة', 'مقابل', 'دوار جد', 'سيدي عيسى', 'إدريش', 'سيدي عقبة', 'خريج', 'الشرفة', 'البرج', 'سيدي عيسى', 'تسمسيلت'] },
    { id: 8, name: 'بشار', communes: ['بشار', 'فركيوة', 'بني عباس', 'تيميمون', 'زاوية كنتة', 'مقبرة', 'بني زيد', 'الفيضة', 'سالي', 'الرقة', 'سيدي عبد الله', 'أولاد سعيد', 'بريش', 'مسعد', 'أم الجمل', 'بني مالك', 'الفيضة', 'تاجموت', 'تيميمون'] },
    { id: 9, name: 'البليدة', communes: ['البليدة', 'الشلف', 'سيدي مدان', 'عين النعجة', 'وادي سلي', 'المرسى', 'باب الزوار', 'سيدي عبد الرحمن', 'أولاد يعقوب', 'بني مزار', 'قصر البخاري', 'العمارية', 'الشرقية', 'قصر الشلالة', 'الأوراس', 'الزهراء', 'بني سمية', 'المسيلة', 'شلالة'] },
    { id: 10, name: 'البويرة', communes: ['البويرة', 'البرج', 'الأخضر', 'الشلال', 'بني حميد', 'الشرقية', 'سيدي أحمد', 'تيكجدة', 'بني ياجيس', 'الشريعة', 'القيطنة', 'الحامة', 'المسيلة', 'بومدفع', 'قصر البخاري', 'عين الملح', 'العمارية', 'حسين داي', 'بوشوي'] },
    { id: 11, name: 'تبسة', communes: ['تبسة', 'بريكة', 'بئر العاتر', 'المرسى', 'العبادية', 'العوينات', 'التيجي', 'خراطة', 'فركيوة', 'سيدي عيسى', 'عين سنوسي', 'وادي الجاز', 'بني عبيد', 'فلفلة', 'شوشة', 'مقابل', 'بوزيان', 'نقرين', 'بني زيد', 'الأغواط'] },
    { id: 12, name: 'تلمسان', communes: ['تلمسان', 'العيون', 'فاس', 'الشرف', 'المسيلة', 'الشرقية', 'سيدي يحيى', 'بني سفيان', 'قصر البخاري', 'العمارية', 'المقرية', 'سيدي عبد الله', 'البرج', 'بومعز', 'الجميلة', 'المسيلة', 'الزهراء', 'بني زيد', 'الحامة', 'الناظور'] },
    { id: 13, name: 'تيارت', communes: ['تيارت', 'فرندة', 'البرج', 'سيدي بوزيد', 'العثمانية', 'سيدي نعمان', 'المسيلة', 'الشرقية', 'قصر الشلالة', 'الأخضر', 'عين قشرة', 'بني معوش', 'بريكة', 'سيدي عيسى', 'الحامة', 'الشريعة', 'بني زيد', 'الزهراء', 'المسيلة', 'عين قشرة'] },
    { id: 14, name: 'تيزي وزو', communes: ['تيزي وزو', 'خراطة', 'بني حبيبي', 'الشرقية', 'المسيلة', 'بني ياجيس', 'الشريعة', 'عين قشرة', 'بني زيد', 'الأوراس', 'الفيضة', 'عين قشرة', 'الشلال', 'بني سمية', 'العمارية', 'البرج', 'بريكة', 'سيدي عيسى', 'الزهراء'] },
    { id: 15, name: 'الجزائر', communes: ['الجزائر الوسطى', 'الجزائر الشرقية', 'الجزائر الغربية', 'المرسى', 'العاصمة', 'بئر مراد رايس', 'البرج', 'الجميلة', 'الحامة', 'بني حميد', 'الشريعة', 'الشرقية', 'سيدي عبد الله', 'الشلف', 'بومعز', 'الزهراء', 'العمارية', 'المسيلة', 'سيدي بوزيد'] },
    { id: 16, name: 'الجلفة', communes: ['الجلفة', 'عين الدفلى', 'سيدي عيسى', 'البرج', 'سيدي عبد الله', 'المسيلة', 'بريكة', 'خراطة', 'سيدي بوزيد', 'بني زيد', 'البرج', 'العمارية', 'الجميلة', 'المسيلة', 'سيدي عبد الله', 'بومعز', 'الزهراء', 'الشريعة', 'الأوراس'] },
    { id: 17, name: 'جيجل', communes: ['جيجل', 'الشريعة', 'الشرقية', 'المسيلة', 'عين قشرة', 'بريكة', 'بني زيد', 'الحامة', 'الأوراس', 'الزهراء', 'البرج', 'سيدي بوزيد',]},
    { id: 18, name: 'سطيف', communes: ['سطيف', 'عين البيضاء', 'بريكة', 'سيدي عيسى', 'بني زيد', 'البرج', 'الزهراء', 'المسيلة', 'الشرقية', 'بني حميد', 'العمارية', 'الجزائر الوسطى', 'العاصمة', 'الأوراس', 'الفيضة', 'عين قشرة', 'سيدي عبد الله', 'خراطة', 'الحامة', 'الشريعة'] },
    { id: 19, name: 'سعيدة', communes: ['سعيدة', 'قصر الشلالة', 'البرج', 'سيدي عيسى', 'الشرقية', 'خراطة', 'العمارية', 'بني زيد', 'بريكة', 'الحامة', 'الأوراس', 'عين قشرة', 'الزهراء', 'بني معوش', 'المسيلة', 'سيدي عبد الله', 'العاصمة', 'الفيضة', 'الشريعة', 'الجزائر الوسطى'] },
    { id: 20, name: 'سكيكدة', communes: ['سكيكدة', 'الشرقية', 'بني زيد', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'سيدي عبد الله', 'خراطة', 'المسيلة', 'العمارية', 'بني معوش', 'الشريعة', 'عين قشرة', 'العاصمة', 'الفيضة', 'سيدي عيسى', 'البرج', 'بني حميد', 'الحامة'] },
    { id: 21, name: 'سيدي بلعباس', communes: ['سيدي بلعباس', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 22, name: 'عنابة', communes: ['عنابة', 'الشرقية', 'بني زيد', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'سيدي عبد الله', 'خراطة', 'العمارية', 'بني معوش', 'الشريعة', 'عين قشرة', 'الفيضة', 'سيدي عيسى', 'البرج', 'بني حميد', 'العاصمة', 'الجزائر الوسطى'] },
    { id: 23, name: 'قالمة', communes: ['قالمة', 'الشرقية', 'بني زيد', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'سيدي عبد الله', 'خراطة', 'العمارية', 'بني معوش', 'الشريعة', 'عين قشرة', 'الفيضة', 'سيدي عيسى', 'البرج', 'بني حميد', 'العاصمة', 'الجزائر الوسطى'] },
    { id: 24, name: 'قسنطينة', communes: ['قسنطينة', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 25, name: 'المدية', communes: ['المدية', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 26, name: 'مستغانم', communes: ['مستغانم', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 27, name: 'المسيلة', communes: ['المسيلة', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 28, name: 'معسكر', communes: ['معسكر', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 29, name: 'ورقلة', communes: ['ورقلة', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 30, name: 'وهران', communes: ['وهران', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 31, name: 'البيض', communes: ['البيض', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 32, name: 'برج بوعريريج', communes: ['برج بوعريريج', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', 'الزهراء', 'المسيلة', 'عين قشرة', 'بني معوش', 'الشريعة', 'الفيضة', 'سيدي عبد الله', 'العاصمة', 'الجزائر الوسطى', 'بني حميد', 'سيدي عبد الله'] },
    { id: 33, name: 'بومرداس', communes: ['بومرداس', 'البرج', 'العمارية', 'خراطة', 'بني زيد', 'سيدي عيسى', 'بريكة', 'الحامة', 'الأوراس', ]},
    { id: 34, name: 'Bordj Bou Arreridj', communes: ['Bordj Bou Arreridj', 'El Achir', 'El Madher', 'El Maarouf', 'El Main', 'El Perou', 'Ksar El Kebir', 'Ksar El Boukhari', 'M’chedallah', 'Oued El Berdi', 'Tamelalat', 'Tibane', 'Tiaret', 'Zeribet El Oued'] },

  ];

  const handleWilayaChange = (e) => {
    const wilayaId = e.target.value;
    const wilaya = wilayas.find((w) => w.id === parseInt(wilayaId));
    setSelectedWilaya(wilayaId);
    setCommunes(wilaya ? wilaya.communes : []);
    const wilayaName = wilaya ? wilaya.name : '';
    setFormData({ ...formData, wilaya: wilayaName, commune: '' });
    setShippingPrice(shippingPrices[wilayaName] || '400 DZD'); // Set shipping price based on selected wilaya
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
              {/* Product Display */}
              {products.map((product) => (
                <div key={product.title} className="mb-8">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full rounded-lg"
                  />
                  <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
                  <div className="mt-2">
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through">{product.oldPrice}</span>
                    )}
                    <span className="text-red-500 ml-2 text-xl font-bold">{product.price}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{product.desc}</p>
                  <a href={product.link} className="text-blue-500 hover:underline">View Product</a>
                </div>
              ))}
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
                <option value="" disabled>
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
                  <option value="" disabled>
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
            <div className="mb-4">
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
                <span>{products.reduce((total, product) => total + parseInt(product.price), 0) * quantity} دج</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <span>{shippingPrice}</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span>{(products.reduce((total, product) => total + parseInt(product.price), 0) * quantity) + parseInt(shippingPrice)} دج</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="flex-col justify-center items-center gap-4 m-4 p-4 my-12 lg:flex-row lg:flex-reverse">
        <div className="w-full flex justify-center items-center lg:w-1/3">
          <img
            className="rounded-full w-full"
            src="https://i.ibb.co/Mp4BBHb/logo-Djazirat-El-Marra-1.png"
            alt="Djazirat El Marra Logo"
          />
        </div>
        <div className="flex justify-center items-center lg:items-start flex-col w-full p-2 gap-8 lg:w-1/3">
          <h1 className="text-3xl text-red-500 capitalize">Why Choose Us</h1>
          <p className="w-full">
            Bienvenue sur Djazirat El Marra, votre destination pour des soins de la peau de qualité supérieure en Algérie. Nous proposons des produits de marques renommées comme The Ordinary, La Roche-Posay, Cerave et Avene, répondant à tous vos besoins de soins de la peau. Que vous luttiez contre l'acné, la peau sèche ou cherchiez un teint éclatant, nous avons ce qu'il vous faut. Profitez de notre livraison rapide dans les 58 wilayas et d'un service client exceptionnel. Découvrez votre routine parfaite et embarquez pour un voyage vers une peau plus saine et radieuse avec Djazirat El Marra.
          </p>
          <button className="border-2 p-4">
            <Link to="shop" spy={true} smooth={true} offset={50} duration={500}>
              Back to Shop
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};
export default About;