import React, { useEffect } from "react";
import Logo from "../../assets/site-logo.png";
import searchIcon from "../../assets/Search-icon.svg";
import Back from "../../assets/back.png";
import Menu from "../../assets/menu.svg";
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  function findFilm(text) {
    if (text.length) {
      navigate(`search/${text}`);
    }
  }

  const toggleClass = "is-sticky";
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  };

  return (
    <header className="header fixed z-20 w-full">
      <div className="container mx-auto">
        <div className="header__inner flex justify-between items-center py-[15px]">
          <a href="/" className="logo flex items-center gap-x-6">
            <img src={Logo} alt="site-logo" />
            <h2 className="logo-text text-[24px] leading-6 font-bold text-white">
              MovieBox
            </h2>
          </a>
          <form className="header-form w-1/2">
            <input
              onChange={(e) => {
                e.preventDefault();
                findFilm(e.target.value);
              }}
              type="text"
              placeholder="What do you want to watch?"
              className="px-[10px] py-[6px] rounded-[6px] border-2 border-solid border-[#D1D5DB] bg-transparent outline-none w-full text-white"
            />
          </form>
          <div className="header-extra flex gap-x-[27px] items-center">
            <Link
              to="/register"
              className="text-[16px] leading-6 font-bold text-white"
            >
              Sign in
            </Link>
            <img
              src={Menu}
              alt="menu"
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
