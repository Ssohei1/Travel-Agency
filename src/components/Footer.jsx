import React from "react";
import logo from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-[#232323] py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <div className="flex flex-col-reverse justify-between gap-4 880px:flex-row 880px:items-center 880px:gap-0">
          <ul className="flex gap-7 font-iransansL text-white">
            <li className="border-l-2 pl-4 transition-colors duration-300 hover:text-primary">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className="border-l-2 pl-4 transition-colors duration-300 hover:text-primary">
              <Link to="/about">درباره ما</Link>
            </li>
            <li className="border-l-2 pl-4 transition-colors duration-300 hover:text-primary">
              <Link to="/contact">تماس</Link>
            </li>
          </ul>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-5" src={logo} alt="logo" />
            <h3 className="font-rokhB text-white">سفرکن</h3>
          </Link>
        </div>
        <hr className="my-10 bg-white" />
        <div className="flex flex-col-reverse justify-between gap-4 880px:flex-row 880px:items-center 880px:gap-0">
          <p className="font-iransansL text-white">
            تمامی حقوق برای کاربر این محصول حفظ است
          </p>
          <div className="flex items-center gap-2">
            <Link to="#">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="#">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="#">
              <img src={twitter} alt="twitter" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
