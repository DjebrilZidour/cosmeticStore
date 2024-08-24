import ProductCard from "./ProductCard";
import { Link } from "react-scroll";

const products = [
  {
    title: "La roshe-posay Effaclar K(+)",
    desc: "Ne laissez pas les imperfections vous empêcher de rayonner! Adoptez notre Soin Effaclar K+ de La Roche-Posay dès aujourd'hui et retrouvez une peau saine et équilibrée.",
    img: "https://i.ibb.co/PG5rLjQ/3-copy-2.png",
    star: "https://cdn-icons-png.flaticon.com/128/10801/10801392.png",
    oldPrice: "4500 DZD",
    price: "3999 DZD",
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-rosheposay-effaclar-k",
  },
  {
    title: "Avéne cleanance gel nettoyant 400 Ml",
    desc: "Ne laissez pas les impuretés ternir votre éclat naturel! Adoptez le Gel Nettoyant Cleanance d'Avene dès aujourd'hui et retrouvez une peau équilibrée et éclatante de santé.",
    img: "https://i.ibb.co/f4g1DvJ/3-copy.png",
    star: "",
    oldPrice: "",
    price: "4499 DZD",
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/avene-cleanance-gel-nettoyant-400-ml",
  },
  {
    title: "Cerave Gel Nettoyant Anti-Rugosités​ 236ml",
    desc: "Nettoyant moussant qui favorise l'élimination des rugosités pour une peau lisse",
    img: "https://i.ibb.co/wLC72w8/4.png",
    star: "",
    oldPrice: "4000 DZD",
    price: "3500 DZD",
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/cerave-gel-nettoyant-antirugosites-236ml",
  },
  {
    title: "La roshe posay Cicaplast Baume B5",
    desc: "ce baume prend soin de votre peau en profondeur. 💧 Pour des lèvres gercées, des zones sèches ou des petites irritations, le Baume B5 Cicaplast est votre allié de confiance.",
    img: "https://i.ibb.co/D52Qp8c/3.png",
    star: "",
    oldPrice: "4000 DZD",
    price: "3900 DZD",
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/la-roshe-posay-cicaplast-baume-b5",
  },
  {
    title: "Ceravie Hydrating Facial Cleanser 437ml",
    desc: " Il élimine délicatement le maquillage et les impuretés, laissant la peau douce.💙 Pour une expérience agréable, spécialement pour les peaux sensibles et sèches.",
    img: "https://i.ibb.co/0rFVJP1/2.png",
    star: "",
    oldPrice: "4700DZD",
    price: "4300 DZD",
    link: "https://djazirat-elmarra.shop.maystro-delivery.com/djazirat-elmarra/ceravie-hydrating-facial-cleanser",
  },
  {
    title: "the ordinary hyluronic Acid 2% + B5",
    desc: "Sa texture légère et non grasse pénètre rapidement dans la peau, offrant une hydratation intense et durable. Convient à tous les types de peau, même les plus sensibles.",
    img: "https://i.ibb.co/kqZrTvD/1.png",
    star: "",
    oldPrice: "5600DZD",
    price: "4850DZD",
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

//!!! https://djebrilzidour.github.io/djBackend/djbackend.json   ----- A P I   L I N K ------

const callBack = (product) => {
  <ProductCard
    title={product.title}
    desc={product.desc}
    img={product.img}
    star={product.star}
    price={product.price}
  />;
};

const Products = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center items-center sm:grid-cols-1">
      {products.map((product) => {
        return (
          <ProductCard
            title={product.title}
            desc={product.desc}
            img={product.img}
            star={product.star}
            oldPrice={product.oldPrice}
            price={product.price}
            link={product.link}
          />
        );
      })}
    </div>
  );
};

export default Products;
