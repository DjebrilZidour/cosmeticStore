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

            <h1 className="text-3xl capitalize lg:w-full">
              welcome to your house of beauty !!!
            </h1>
            <p className="text-sky-600 text-lg capitalize w-full text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              dicta repellat, veniam in deleniti ipsum quaerat tenetur
              aspernatur voluptates quo vero quibusdam delectus itaque vel ut
              omnis reprehenderit eos at nemo hic. Nesciunt rem beatae itaque.
              Dignissimos nulla possimus repellat, ut maxime fuga autem
              voluptates officiis consequatur omnis odio vel!
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
          <button className="border px-4 py-2 rounded-xl hover:bg-red-100">Shop Now</button>
          <button className="border px-4 py-2 rounded-xl hover:bg-red-100">Learn More</button>
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
