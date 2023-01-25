import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="max-w-[1640px] flex justify-between items-center p-4">
      {/* Left Side */}

      <div className="flex items-center">
        <AiOutlineMenu size={30} className="cursor-pointer" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span>Eats</span>
        </h1>
        <div className="lg:flex items-center bg-gray rounded-full p-1 text-[14px]">
          <span className="bg-black text-white rounded-full p-2">Delivery</span>
          <span className="p-2">Pickup</span>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-gray rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2 w-full focus:outline-none" />
      </div>

      {/* Card Button */}

      <button className="flex items-center text-white bg-black rounded-full p-2">
        <BsFillCartFill size={20} className="mx-2" />
        Card
      </button>
    </header>
  );
};
// "bg-slate-400  lg:flex items-center rounded-full p-1

export default Header;
