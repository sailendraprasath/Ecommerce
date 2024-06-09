import React from "react";
import Logo from "../assets/Nav png/Navbar.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

import DarkMode from "./DarkMode";

const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper navbar */}
        <div className="bg-MyMarket1/45 py-2 ">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10 " />
                Ostokset
              </a>
            </div>
            {/* search bar*/}

            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] dark:bg-gray-800 dark:border-gray-500 sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border
                   border-gray-300 px-2 py-1 focus:outline-none focus:border-1 cursor-pointer focus:border-MyMarket1  "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-MyMarket1 absolute top-1/2 -translate-y-2 right-3 " />
              </div>
              {/* order button */}
              <button
                onClick={() => alert("Ordering not available yet")}
                className="bg-gradient-to-r from-MyMarket1 to-market  transition-all duration-200
                text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200 ">
                  Cart
                </span>
                <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer duration-200 " />
              </button>
              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* lower navbar */}
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-MyMarket1 duration-300 "
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* simple Drop drown  */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2 ">
                Trending products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-150px rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-MyMarket1/60"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
