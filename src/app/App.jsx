import Navbar from "../components/Navbar";
import SecNav from "../components/SecNav"
import Products from "../components/Products";

function App() {
  return (
    <section className="scroll-smooth">
      <Navbar />
      <SecNav />
      <section
        id="#home"
        className="flex justify-center items-center flex-col gap-8 w-full "
      >
        <div className="font-serif gap-8 mx-4 flex flex-col-reverse items-center justify-center lg:flex-row">
          
          <div className="flex flex-col items-center justify-center gap-8 my-4 p-4 w-full lg:items-start lg:w-1/2">

            <h1 className="text-3xl capitalize lg:w-full ">
              salam 3likoooom !!!
            </h1>
            <p  className="text-sky-600 text-lg capitalize w-full text-center lg:text-left text-purple-700">
              marhba bik end djazirat el marra une boutique algeriene online ouin tlkay la qualité et le prix ida andak des problémes de visage oula de beauté generallement andna tlkay lhal tae les imperfections lhab les traces les points noires ext andna tathanay mnhoum  
            </p>
          </div>

          <div className=" flex flex justify-center items-center">
            <img
              className="w-72 rounded-3xl"
              src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="border px-4 py-2 rounded-xl hover:bg-purple-600 hover:text-white">Shop Now</button>
          <button className="border px-4 py-2 rounded-xl hover:bg-purple-600 hover:text-white">Learn More</button>
        </div>
      </section>

      <div
        id="#shop"
        className="flex flex-col justify-center items-center w-full mt-12"
      >
        <h1 className="text-2xl text-red-500 p-4 uppercase bold">shop now </h1>
        <div className=" flex-col justify-center items-center">
          <Products />
        </div>
      </div>
    </section>
  );
}

export default App;
