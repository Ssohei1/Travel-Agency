import React from "react";
import beach from "../assets/images/beach.svg";
import beachumbrella from "../assets/images/beach-umbrella.svg";
import city from "../assets/images/city.svg";
import mountain from "../assets/images/mountain.svg";
import tent from "../assets/images/tent.svg";
import travelling from "../assets/images/travelling.svg";
import pattaya from "../assets/images/pattaya.png";
import {
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
  Calendar1,
  Location,
  User,
} from "iconsax-react";

export const Hero = () => {
  return (
    <div className="bg-backgroundlight">
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-between p-4 lg:flex-row lg:items-start">
        {/* right side */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="my-10 flex max-w-[300px] items-center gap-2 rounded-full border border-[#FF782C40] bg-[#FFAA7C33] px-5 py-3 font-rokhM text-[18px] text-secondary">
            <img className="w-6" src={beach} alt="beach" />
            بسیار سفر باید تا پخته شود خامی
          </div>
          <h1 className="font-rokhB text-6xl leading-normal">
            دنیا را کشف کنید
            <br className="hidden lg:block" /> زندگی را{" "}
            <span className="text-primary">
              {/* <br className="bock lg:hidden" /> */}
              تجربه
            </span>
            <span className="flex gap-4">
              کنید
              <img className="" src={travelling} alt="travelling" />
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
          <div className="absolute left-10 top-10 rounded-[32px] border border-white bg-white/40 p-5 px-6">
            <p className="mb-5 flex font-rokhB text-white">
              <Location
                size="25"
                color="#FFF"
                className="leftt-1 relative bottom-1"
              />
              تایلند
            </p>
            <h2 className="font-rokhB text-7xl text-white">پاتایا</h2>
          </div>
          <div className="absolute left-14 top-52 flex gap-1 font-rokhB text-6xl text-white">
            <ArrowRight className="cursor-pointer" size="50" color="#FFF" />
            01
            <ArrowLeft className="cursor-pointer" size="50" color="#FFF" />
          </div>
          <img
            className="h-96 w-full rounded-[56px] object-cover lg:h-[811px] lg:w-[636px]"
            src={pattaya}
            alt="pattaya"
          />
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
        <div className="mt-10 flex w-full flex-col items-start gap-7 rounded-[58px] border border-cardstroke/35 bg-white p-5 px-10 font-iransansM text-lg text-txt lg:absolute lg:bottom-16 lg:left-[20%] lg:mt-0 lg:w-auto lg:flex-row lg:items-center lg:gap-0 lg:rounded-full">
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
          <button className="mx-auto w-full rounded-full bg-primary px-7 py-2 text-white lg:w-auto">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
};
