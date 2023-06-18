import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavbarCSS from "../styles/navbar.module.css";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { ThemeContext } from "../App";

import light_theme from "../assets/light_theme.png";
import dark_theme from "../assets/dark_theme.png";

// ! Navbar Function
export default function Navbar({ current }) {
  const theme = useContext(ThemeContext);

  const [navOpen, setNavOpen] = useState(false);
  function navOpenHandler() {
    setNavOpen((prev) => !prev);
  }
  return (
    <section className={`flex pr-2 ${NavbarCSS.navbarSection}`}>
      <button
        onClick={navOpenHandler}
        className={`${NavbarCSS.menu} self-center`}
      >
        <HiOutlineMenuAlt1 className={`text-3xl hover:text-accent`} />
      </button>
      <div className={`${navOpen ? NavbarCSS.open : ""}  ${NavbarCSS.nav}`}>
        <button onClick={navOpenHandler} className={`${NavbarCSS.close}`}>
          <AiOutlineClose
            className={` hover:text-red-500 text-4xl cursor-pointer`}
          />
        </button>
        <div className={NavbarCSS.navList}>
          <Link
            to="/"
            className={`${current === "home" ? NavbarCSS.active : ""} ${
              NavbarCSS.navItem
            }`}
          >
            Home
          </Link>
          <Link to="/about-me" className={`${current === "aboutMe" ? NavbarCSS.active : ""} ${NavbarCSS.navItem}`}>
            About Me
          </Link>
          <Link to="/projects" className={`${current === "projects" ? NavbarCSS.active : ""} ${NavbarCSS.navItem}`}>
            Showcase
          </Link>
          <Link to="/skills" className={`${current === "skills" ? NavbarCSS.active : ""} ${NavbarCSS.navItem}`}>
            Skills
          </Link>
          <Link to="/contact" className={`${current === "contact" ? NavbarCSS.active : ""} ${NavbarCSS.navItem}`}>
            Contact
          </Link>
        </div>
      </div>
      <div
        className={`flex ml-auto items-center justify-center  ${NavbarCSS.themeDiv}`}
        onClick={() => theme.toggleTheme()}
      >
        {theme.darkTheme ? (
          <img
            src={light_theme}
            className={`cursor-pointer ${NavbarCSS.darkTheme}`}
            alt="Light_Theme"
          />
        ) : (
          <img
            src={dark_theme}
            className={`cursor-pointer ${NavbarCSS.lightTheme}`}
            alt="Dark_Theme"
          />
        )}
      </div>
    </section>
  );
}
