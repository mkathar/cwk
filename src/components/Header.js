import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiGlobe } from "react-icons/bi";
import { RiUserAddFill, RiUserFill } from "react-icons/ri";
export default function Header() {
  return (
    <div className="bg-blue-300 ">
      <div className="container mx-auto h-11 flex items-center justify-between">
        <NavLink
          to={"/"}
          className={"items-center gap-x-2 text-black transition-all "}
        >
          ./Movies
        </NavLink>
        <nav className="flex gap-x-8 text-sm font-semibold">
          <NavLink
            className={
              "flex items-center gap-x-2 text-white transition-all text-opacity-60 hover:text-opacity-100"
            }
          >
            <BiGlobe />
            Türkçe(TR)
          </NavLink>
          <NavLink
            to={"/LogIn"}
            className={
              "flex items-center gap-x-2 text-white transition-all text-opacity-60 hover:text-opacity-100"
            }
          >
            <RiUserFill />
            Giriş Yap
          </NavLink>
          <NavLink
            to={"/SignIn"}
            className={
              "flex items-center gap-x-2 text-white transition-all text-opacity-60 hover:text-opacity-100"
            }
          >
            <RiUserFill />
            Kayıt Ol
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
