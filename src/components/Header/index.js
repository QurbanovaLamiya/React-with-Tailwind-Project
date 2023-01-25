import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
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
        <div className="lg:flex items-center bg-gray rounded-full p-1 text-[14px]">
          <span className="bg-black text-white rounded-full p-2">Delivery</span>
          <span className="p-2">Pickup</span>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-gray rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
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

      {/* Mobile Menu */}

      {nav ? (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 z-10"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
