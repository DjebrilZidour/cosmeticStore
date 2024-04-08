
const SecNav = ()=>{
    return(
        <section className="flex justify-center items-center w-full my-8">
            <ul className="flex justify-center items-center gap-4 text-xl text-gray  border-b rounded-full shadow-lg">
                <li className="cursor-pointer font-serif border-white p-4 rounded-full hover:bg-purple-600"><a href="#home">Home</a></li>
                <li className="cursor-pointer font-serif border-white p-4 rounded-full hover:bg-purple-600"><a href="#shop">Shop</a></li>
                <li className="cursor-pointer font-serif border-white p-4 rounded-full hover:bg-purple-600"><a href="#">About</a></li>
                <div className="flex justify-between items-center gap-2 px-4">
                    <a href="https://www.instagram.com/djazirat_elmarra/"><img className="w-6 cursor-pointer hover:w-10" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></a>
                    <a href="https://www.facebook.com/djaziratelmarra"><img className="w-6 cursor-pointer hover:w-10" src="https://cdn-icons-png.flaticon.com/128/733/733547.png " alt="" /></a>
                    
                </div>
            </ul>
        </section>
    )
}
export default SecNav