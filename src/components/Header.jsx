import React from "react";
import logo from "../assets/images/logo.png";
import {
  ArrowDown2,
  BagHappy,
  HambergerMenu,
  SearchNormal1,
  User,
} from "iconsax-react";
export const Header = () => {
  return (
    <div className="bg-backgroundlight">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between p-4">
        <a href="#" className="flex items-center gap-3">
          <img className="w-5" src={logo} alt="logo" />
          <h1 className="font-rokhB text-2xl">سفرکن</h1>
          <div className="mr-6 hidden lg:block">
            <nav className="">
              <ul className="flex items-center gap-5 font-iransansL text-xl text-txt">
                <li>
                  <a href="#">هتل</a>
                </li>
                <li>
                  <a className="flex items-center gap-1" href="#">
                    تور داخلی
                    <ArrowDown2 size="20" color="#404040" />
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-1" href="#">
                    تور خارجی
                    <ArrowDown2 size="20" color="#404040" />
                  </a>
                </li>
                <li>
                  <a href="#">بیمه مسافرتی</a>
                </li>
                <li>
                  <a href="#">سفرنامه</a>
                </li>
                <li className="cursor-pointer">
                  <SearchNormal1 size="23" color="#292D32" />
                </li>
              </ul>
            </nav>
          </div>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          <button className="rounded-full border border-[#4E30FF] bg-primary p-3">
            <BagHappy size="24" color="#FFFBFB" />
          </button>
          <button className="flex items-center gap-1 rounded-full border border-cardstroke/25 px-4 py-2 font-iransansM text-txt">
            <User size="22" color="#404040" />
            حساب کاربری
          </button>
        </div>
        <HambergerMenu
          className="block cursor-pointer lg:hidden"
          size="32"
          color="#000"
        />
      </header>
      <hr className="border-cardstroke/25" />
    </div>
  );
};
