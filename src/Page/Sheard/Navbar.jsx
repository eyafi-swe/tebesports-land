import React from "react";
const Navbar = () => {
  const navItem = (
    <>
      <li className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white">Home </li>
      <li className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white">Community</li>
      <li className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white">Guild </li>
      <li className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white">blog </li>
      <li className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white">shop </li>
      <li className="mx-0 md:mx-2 mt-2 md:mt-0  capitalize font-semibold text-white">Esports </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#292636] text-white h-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm p-3 rounded  dropdown-content mt-3 z-[1] m-0   shadow bg-[#292636] w-52 h-max "
            >
              {navItem}
            </ul>
          </div>
          <div>
            <button className=" w-20 mx-2">
              <img src={{}} alt="" />
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end  ">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
