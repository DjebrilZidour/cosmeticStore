const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "rgb(254,173,245)" }}
      className=" px-16 py-2 w-full"
    >
      <ul className="list-none flex justify-between items-center">
        <li className="flex justify-center items-center gap-2">
          <img
            href="https://ibb.co/FJMHH19"
            className="  h-14 w-14 bg-white rounded-full"
            src="https://i.ibb.co/Mp4BBHb/logo-Djazirat-El-Marra-1.png"
          />
        </li>

        <div>
          <h1 className="text-lg">Djazirat Elmarra</h1>
        </div>

        <div className="flex justify-between items-center text-black-100 "></div>
      </ul>
    </nav>
  );
};
export default Navbar;
