import Navbar from "../components/Navbar";
import SecNav from "../components/SecNav";
import Products from "../components/Products";
import { Link } from "react-scroll";
import About from "../components/About";

function App() {
  return (
    <section className="scroll-smooth">
      <Navbar />
      <SecNav />

      <div className="flex justify-center items-center w-full">

      <h1 className="uppercase text-5xl text-center text-red-500">ce site web est en maintenace 
        <br />on s'excuse
      </h1>

      </div>
      <div className=" flex-col justify-center items-center">
          <Products />
        </div>
{/* 
      <div
        id="home"
        className="flex justify-center items-center flex-col gap-8 w-full "
      >
        <div className="font-serif gap-8 mx-4 flex flex-col-reverse items-center justify-center lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-8 my-4 p-4 w-full lg:items-start lg:w-1/2">
            <h1 className="text-3xl capitalize lg:w-full ">
              salam 3likoooom !!!
            </h1>
            <p className="text-sky-600 text-lg capitalize w-full text-center lg:text-left text-purple-700">
              marhba bik end djazirat el marra une boutique algeriene online
              ouin tlkay la qualité et le prix ida andak des problémes de visage
              oula de beauté generallement andna tlkay lhal tae les
              imperfections lhab les traces les points noires ext andna tathanay
              mnhoum
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <img
              className="w-72 rounded-3xl"
              src="https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button className="border px-4 py-2 rounded-xl hover:bg-red-100">
          <Link
                to="shop"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                 Shop Now
              </Link>
          </button>
          <button className="border px-4 py-2 rounded-xl hover:bg-red-100">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>Learn More</Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full my-12">
        <h1 className="text-2xl text-red-500 p-4 uppercase bold" id="shop">
          shop now{" "}
        </h1>
        <div className=" flex-col justify-center items-center">
          <Products />
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col justify-center items-center my-12"
      >
        <h1 className="text-2xl text-red-500 p-4 uppercase bold">About</h1>
        <div className="flex lg:flex-row-reverse  items-center  justify-center lg:mx-12 flex-col">
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img
              src="https://i.ibb.co/Mp4BBHb/logo-Djazirat-El-Marra-1.png"
              className="rounded-full w-1/2"
              alt=""
            />
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:w-1/2 gap-8 my-8 mx-4">
            <h1 className="text-4xl text-red-500 capitalize">why chose us</h1>
            <p className="text-center lg:text-start">
              Bienvenue sur Djazirat El Marra, votre destination pour des soins
              de la peau de qualité supérieure en Algérie. Nous proposons des
              produits de marques renommées comme The Ordinary, La Roche-Posay,
              Cerave et Avene, répondant à tous vos besoins de soins de la peau.
              Que vous luttiez contre l'acné, la peau sèche ou cherchiez un
              teint éclatant, nous avons ce qu'il vous faut. Profitez de notre
              livraison rapide dans les 58 wilayas et d'un service client
              exceptionnel. Découvrez votre routine parfaite et embarquez pour
              un voyage vers une peau plus saine et radieuse avec Djazirat El
              Marra.
            </p>
            <button className="border px-4 py-2 rounded-xl hover:bg-red-100">
              <Link
                to="shop"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Back To Shop
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default App;
