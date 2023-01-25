import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Nav from "../Nav";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="container flex justify-between items-center ">
      {/* Left Side */}

      <div className="flex items-center">
        <AiOutlineMenu
          size={30}
          className="cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-orange-600">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="lg:flex items-center bg-grey rounded-full p-1 text-[14px]">
          <span className="bg-black text-white rounded-full p-2">Delivery</span>
          <span className="p-2">Pickup</span>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-grey rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="Search food"
        />
      </div>

      {/* Card Button */}

      <button className="flex items-center text-white bg-black rounded-xl p-2">
        <BsFillCartFill size={20} className="mr-2" />
        Card
      </button>
      {nav && <Nav nav={nav} setNav={setNav} />}
    </header>
  );
};

export default Header;
