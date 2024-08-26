

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const ProductCard = (props) => {
  const {state} = useLocation()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center sm:w-full  lg:w-80 border-2 border-black rounded-xl ">
      <div className="flex justify-center items-center w-full">
        <img
          className="rounded-xl w-80"
          src={props.img}
          alt=""
        />
      </div>

      <div className="p-4 flex flex-col justify-center items-start gap-2 font-serif	h-80 w-80">
        <h1 className=" text-xl font-serif	">{props.title}</h1>
        <p className="text-sm">{props.desc}</p>
        <div className=" flex flex-col justify-between items-start">
          <h3 className="decoration-dashed text-xl text-red-600 line-through">{props.oldPrice}</h3>
          <h2 className="text-2xl text-green-500 font-serif">{props.price}</h2>
        </div>
        <div className="flex justify-center items-center w-full font-serif ">
       
          <button onClick={()=>{
            console.log("clicked product");
            navigate("/single-product", {
              state: {
                title:props.title,
              },})
          }} className="border-2 px-4 py-2 rounded-lg bg-red-200  hover:bg-red-300 w-2/3 text-black text-lg">
           
              Buy now
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
