import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  ArrowDown2,
  BagHappy,
  CloseCircle,
  HambergerMenu,
  SearchNormal1,
  User,
} from "iconsax-react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-backgroundlight">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between p-4">
        <div href="#" className="flex items-center gap-3">
          <Link className="flex items-center gap-3" to="/">
            <img className="w-5" src={logo} alt="logo" />
            <h2 className="font-rokhB text-2xl">سفرکن</h2>
          </Link>
          <nav className="mr-6 hidden lg:block">
            <ul className="flex items-center gap-5 font-iransansL text-lg text-txt 1300px:text-xl">
              <li className="transition-colors duration-300 hover:text-primary">
                <Link to="#">هتل</Link>
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <Link className="flex items-center gap-1" to="#">
                  تور داخلی
                  <ArrowDown2 size="20" color="#404040" />
                </Link>
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <Link className="flex items-center gap-1" to="#">
                  تور خارجی
                  <ArrowDown2 size="20" color="#404040" />
                </Link>
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <Link to="#">بیمه مسافرتی</Link>
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <Link to="#">سفرنامه</Link>
              </li>
              <li className="cursor-pointer">
                <SearchNormal1 size="21" color="#292D32" />
              </li>
            </ul>
          </nav>
          {/* mobile */}
          {isOpen && (
            <nav className="fixed bottom-0 right-0 top-0 z-[999] flex h-full w-full flex-col gap-2 bg-backgroundlight p-4 lg:hidden">
              <div className="flex cursor-pointer justify-between">
                <Link className="flex items-center gap-3" to="/">
                  <img className="w-5" src={logo} alt="logo" />
                  <h2 className="font-rokhB text-xl">سفرکن</h2>
                </Link>
                <CloseCircle
                  size="25"
                  color="#404040"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
              <hr className="h-[2px] border-cardstroke/25" />
              <ul className="flex flex-col gap-8 font-iransansL text-lg text-txt">
                <li className="p-4 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <Link to="#">هتل</Link>
                </li>
                <li className="p-4 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <Link to="#">تور داخلی</Link>
                </li>
                <li className="p-4 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <Link to="#">تور خارجی</Link>
                </li>
                <li className="p-4 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <Link to="#">بیمه مسافرتی</Link>
                </li>
                <li className="p-4 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <Link to="#">سفرنامه</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          <button className="rounded-full border border-[#4E30FF] bg-primary p-2 1300px:p-3">
            <BagHappy size="24" color="#FFFBFB" />
          </button>
          <Link
            to="/signup"
            className="flex items-center gap-1 rounded-full border border-cardstroke/25 px-4 py-2 font-iransansM text-txt"
          >
            <User size="22" color="#404040" />
            حساب کاربری
          </Link>
        </div>
        <HambergerMenu
          onClick={() => setIsOpen(!isOpen)}
          className="block cursor-pointer lg:hidden"
          size="32"
          color="#000"
        />
      </header>
      <hr className="border-cardstroke/25" />
    </div>
  );
};
