import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/boneshaker-logo.png";

export default function Navbar() {
  const [toggle, setTogle] = useState(false);

  function handleClick() {
    setTogle((oldToggle) => !oldToggle);
  }

  function closeMenu() {
    setTogle((oldToggle) => (oldToggle = false));
  }
  const menuData = [
    {
      id: 0,
      name: "Home",
      link: "/"
    },
    {
      id: 1,
      name: "Biciclete",
      link: "/biciclete"
    },
    {
      id: 2,
      name: "Echipament",
      link: "/echipament"
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact"
    }
  ];

  const menu = menuData.map((element) => (
    <li className="list-none" key={element.id}>
      <Link href={element.link}>
        <a className="py-4 px-2 font-semibold hover:text-merida-green transition duration-300">
          {element.name}
        </a>
      </Link>
    </li>
  ));

  const mobileMenu = menuData.map((element) => (
    <li className="list-none m-2" key={element.id}>
      <Link href={element.link}>
        <a
          className="block font-semibold text-sm px-2 py-4 hover:text-merida-green transition duration-300"
          onClick={closeMenu}
        >
          {element.name}
        </a>
      </Link>
    </li>
  ));

  return (
    <nav className="sticky pt-5 top-0 h-36 bg-gradient-to-b via-background-color from-background-color">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7 items-end">
            <div>
              {/* <!-- Website Logo --> */}
              <Link href="/">
                <a>
                  <Image src={logo} alt="Boneshaker magazin biciclete" />
                </a>
              </Link>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-1">{menu}</div>
          </div>
          {/* <!-- Secondary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a
              href=""
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href=""
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Sign Up
            </a>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button
              className={`outline-none mobile-menu-button`}
              onClick={handleClick}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div
        className={`mobile-menu bg-background-color ${
          !toggle ? "menuHidden" : "menuShown"
        } 
        `}
      >
        <ul className="m-4 mb-20">{mobileMenu}</ul>
      </div>
    </nav>
  );
}
