import { Link } from "react-scroll";
const About = () => {
  return (
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
  );
};
export default About;
