import React, { useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import {
  RiHome6Line,
  RiShoppingBagFill
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = ({ setViewCart }) => {

  const sidebar__li_active = "Sidebar__li--active bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"

  const sidebar__li_inactive = "Sidebar__li--inactive hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"


  const [menuSelectec, setMenuSelectec] = useState(1);

  const handleMenuSelect = (id) => {
    setMenuSelectec(id);
    if (id === 2) {
      setViewCart(true)
    } else {
      setViewCart(false)
    }
  }

  return (
    <div
      className="Sidebar__div--principal bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all "
    >
      <div>
        <ul className="Sidebar__ul--menu pl-4">
          <li>
            <h1 className="Sidebar__h1 text-2xl text-gray-300 uppercase font-bold text-center my-5">
              <img src='logo.jpeg' className="w-25 h-25" />

            </h1>
          </li>
          <li className={menuSelectec === 1 ? sidebar__li_active : sidebar__li_inactive}>
            <Link
              key={1}
              to="/"
              onClick={() => { handleMenuSelect(1) }}
              className="Sidebar__Link group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiHome6Line className="text-2xl" />
            </Link>
          </li>
          <li className={menuSelectec === 2 ? sidebar__li_active : sidebar__li_inactive}>
            <Link
              key={2}
              href="#"
              onClick={() => { handleMenuSelect(2) }}
              className="Sidebar__Link group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <MdOutlineShoppingCartCheckout className="text-2xl" />
            </Link>
          </li>
          <li className={menuSelectec === 3 ? sidebar__li_active : sidebar__li_inactive}>
            <Link
              key={3}
              to="/Compras"
              onClick={() => { handleMenuSelect(3) }}
              className="Sidebar__Link group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiShoppingBagFill className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
