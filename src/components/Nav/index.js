import { AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Nav = ({ nav, setNav }) => {
  return (
    <div>
      {nav ? (
        <div className="w-full h-screen bg-black/80 fixed top-0 left-0 z-10"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4 text-orange-600">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li>
              <TbTruckDelivery size={25} className="mr-4  text-orange-600" />
              Orders
            </li>
            <li>
              <MdFavorite size={25} className="mr-4  text-orange-600" />
              Favorites
            </li>
            <li>
              <FaWallet size={25} className="mr-4  text-orange-600" /> Wallet
            </li>
            <li>
              <MdHelp size={25} className="mr-4  text-orange-600" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
