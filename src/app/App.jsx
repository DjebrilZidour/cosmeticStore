import Navbar from "../components/Navbar";
import SecNav from "../components/SecNav";
import Products from "../components/Products";
import About from "../components/About";

function App() {
  return (
    <section className="scroll-smooth">
      <Navbar />
      <SecNav />

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
            Shop Now
          </button>
          <button className="border px-4 py-2 rounded-xl hover:bg-red-100">
            Learn More
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

      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-2xl text-red-500 p-4 uppercase bold">About</h1>
        <div className="flex lg:flex-row-reverse  items-center  justify-center lg:mx-12 flex-col">

        <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img src="https://i.ibb.co/Mp4BBHb/logo-Djazirat-El-Marra-1.png" className="rounded-full w-1/2" alt="" />
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:w-1/2 gap-8 my-8 mx-4">
            <h1 className="text-4xl text-red-500 capitalize">why chose us</h1>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              temporibus quia minima, voluptatum unde laudantium. Illo accusamus
              animi recusandae? Mollitia ut aliquam eaque animi, exercitationem
              laboriosam doloremque, facere sequi assumenda deleniti vitae,
              harum dignissimos. Reiciendis praesentium dolorem distinctio
              repellat perferendis tenetur quam voluptas nisi quisquam atque,
              aliquam minima velit laudantium?
            </p>
            <button></button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default App;
