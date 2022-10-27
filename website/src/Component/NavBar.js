import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="">
      <nav className="flex justify-between items-center text-mor font-bold  font-DM h-20 bg-transparent ">
        <div className="flex justify-start items-center px-10 ">
          <div className=" mx-4 text-3xl ">Star Beauty </div>
          <Link to="/" className="mx-4 text-2xl hover:scale-110">
            Home
          </Link>
          <Link to="/shopping" className="mx-4 text-2xl  hover:scale-110">
            Shopping
          </Link>
          <Link to="/Brands" className="mx-4 text-2xl  hover:scale-110">
            Brand
          </Link>
          <Link to="/pagination" className="mx-4 text-2xl  hover:scale-110">
            pagination
          </Link>
        </div>
        <div className="flex justify-end items-center px-10 ">
          <Link to="/bag" className="px-2 ">
            {" "}
            <FiShoppingBag className=" w-5 h-5  hover:scale-110 " />
          </Link>{" "}
          <Link to="/favourite" className="px-2  hover:scale-110">
            <FiHeart className=" w-5 h-5" />
          </Link>
          <Link
            to="/profile"
            className="mx-3 py-1 px-2 w-[22] font-bold bg-mor rounded-md shadow-sm    flex justify-between items-center"
          >
            <MdOutlinePersonOutline fill="#fff" className=" w-5 h-5" />
            <div className="text-gray-50 flex justify-center items-center px-1">
              Login
            </div>
          </Link>{" "}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
