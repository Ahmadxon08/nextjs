import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex fixed top-0  py-3 container  sm:px-4 mx-auto justify-between items-center bg-slate-300 ">
        <div className="flex">
          <Link href={"/"} className="text-white text-3xl">
            Logo
          </Link>
        </div>
        <nav>
          <ul className="flex justify-center gap-3 items-center">
            <Link
              href={"/"}
              className="text-gray-700 duration-150 active:text-red-400  text-xl"
            >
              Home
            </Link>
            <Link
              href={"/contries"}
              className="text-gray-700  duration-150 active:text-red-400 text-xl"
            >
              Contries
            </Link>
            <Link
              href={"/contact"}
              className="text-gray-700 duration-150 active:text-red-400  text-xl"
            >
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
