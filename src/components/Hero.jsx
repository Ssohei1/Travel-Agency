import React, { useEffect, useState } from "react";
import beach from "../assets/images/beach.svg";
import beachumbrella from "../assets/images/beach-umbrella.svg";
import city from "../assets/images/city.svg";
import mountain from "../assets/images/mountain.svg";
import tent from "../assets/images/tent.svg";
import travelling from "../assets/images/travelling.svg";
import {
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
  Calendar1,
  Location,
  User,
} from "iconsax-react";
import axios from "axios";

export const Hero = () => {
  // render slider
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/slider")
      .then((response) => setSlider(response.data))
      .catch((err) => console.log(err));
  }, []);
  const [currentIndex, setcurrentIndex] = useState(0);
  const nextImage = () => {
    setcurrentIndex((currentIndex + 1) % slider.length);
  };
  const previousImage = () => {
    setcurrentIndex((currentIndex - 1 + slider.length) % slider.length);
  };
  // resize prev/next icon
  const [windowwidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-backgroundlight">
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-between p-4 lg:flex-row lg:items-start">
        {/* right side */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="my-10 flex max-w-[300px] items-center gap-2 rounded-full border border-[#FF782C40] bg-[#FFAA7C33] px-5 py-3 font-rokhM text-[18px] text-secondary">
            <img className="w-6" src={beach} alt="beach" />
            بسیار سفر باید تا پخته شود خامی
          </div>
          <h1 className="mb-5 font-rokhB text-3xl leading-normal sm:text-5xl md:text-6xl md:leading-normal">
            دنیا را کشف کنید
            <br className="hidden lg:block" /> زندگی را{" "}
            <br className="lg:hidden" />
            <span className="text-primary">تجربه </span>
            <span className="inline-flex gap-4 lg:flex">
              کنید
              <img
                className="w-8 sm:w-10 md:w-14 lg:w-auto"
                src={travelling}
                alt="travelling"
              />
            </span>
          </h1>
          <div className="mt-12 hidden gap-5 lg:flex">
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={tent}
                alt="tent"
              />
              <p className="font-rokhB text-txt">کمپ</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={beachumbrella}
                alt="tent"
              />
              <p className="font-rokhB text-txt">ساحل</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={city}
                alt="tent"
              />
              <p className="font-rokhB text-txt">شهر</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={mountain}
                alt="tent"
              />
              <p className="font-rokhB text-txt">جنگل</p>
            </div>
          </div>
        </div>
        {/* left side */}
        <div className="relative flex w-full flex-col lg:w-1/2 lg:flex-row lg:justify-end">
          {slider.length > 0 && (
            <div className="absolute left-10 top-10 rounded-[32px] border border-white bg-white/40 p-5 px-6">
              <p className="mb-5 flex font-rokhB text-base text-white md:text-lg">
                <Location
                  size="25"
                  color="#FFF"
                  className="leftt-1 relative bottom-1"
                />
                {slider[currentIndex]?.country}
              </p>
              <h2 className="font-rokhB text-5xl text-white md:text-7xl">
                {slider[currentIndex]?.city}
              </h2>
            </div>
          )}

          <div className="absolute left-14 top-52 mt-2 flex gap-1 font-rokhB text-5xl text-white md:text-6xl">
            <ArrowRight
              onClick={nextImage}
              className="cursor-pointer"
              size={windowwidth > 768 ? 50 : 35}
              color="#FFF"
            />
            {currentIndex + 1}
            <ArrowLeft
              onClick={previousImage}
              className="cursor-pointer"
              size={windowwidth > 768 ? 50 : 35}
              color="#FFF"
            />
          </div>
          <img
            className="h-80 w-full rounded-[56px] object-cover sm:h-96 lg:h-[811px] lg:w-[636px]"
            src={slider[currentIndex]?.src}
            alt={slider[currentIndex]?.city}
          />
          {/* icon bar mbile */}
          <div className="mt-12 flex w-full justify-between gap-1 lg:hidden">
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={tent}
                alt="tent"
              />
              <p className="font-rokhB text-txt">کمپ</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={beachumbrella}
                alt="tent"
              />
              <p className="font-rokhB text-txt">ساحل</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={city}
                alt="tent"
              />
              <p className="font-rokhB text-txt">شهر</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="mb-2 rounded-3xl border border-cardstroke/25 bg-white p-4"
                src={mountain}
                alt="tent"
              />
              <p className="font-rokhB text-txt">جنگل</p>
            </div>
          </div>
        </div>
        {/* search bar */}
        <div className="mt-10 flex w-full flex-col items-start justify-between gap-7 rounded-[50px] border border-cardstroke/35 bg-white p-5 px-5 font-iransansM text-txt 360px:rounded-[58px] 360px:px-10 sm:text-lg lg:absolute lg:bottom-16 lg:left-[50%] lg:mt-0 lg:w-[1000px] lg:-translate-x-1/2 lg:flex-row lg:items-center lg:gap-0 lg:rounded-full">
          <p className="relative ml-7 flex cursor-pointer items-center gap-2">
            <Location className="" size="20" color="#404040" />
            <span className="absolute bottom-2 right-6 text-[#FF3B3B]">*</span>
            مقصد خود را انتخاب کنید
            <ArrowDown2 size={18} color="#404040" />
          </p>
          <p className="ml-7 flex cursor-pointer items-center gap-2">
            <Calendar1 size="20" color="#404040" />
            تاریخ ورود
            <ArrowDown2 size={18} color="#404040" />
          </p>
          <p className="ml-7 flex cursor-pointer items-center gap-2">
            <Calendar1 size="20" color="#404040" />
            تاریخ خروج
            <ArrowDown2 size={18} color="#404040" />
          </p>
          <p className="ml-7 flex cursor-pointer items-center gap-2">
            <User size="20" color="#404040" />
            تعداد
            <ArrowDown2 size={18} color="#404040" />
          </p>
          <button className="w-full rounded-full bg-primary px-7 py-2 text-white lg:w-auto">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
};
