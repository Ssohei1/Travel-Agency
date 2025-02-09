import { Checkbox } from "@mui/material";
import { ArrowDown2, ArrowUp2, Calendar1 } from "iconsax-react";
import React, { useState } from "react";

export const Prices = ({ prices, start, end }) => {
  const [isOpen, setIsOpen] = useState(false);
  const travelers = [
    "1 بزرگسال",
    "2 بزرگسال",
    "3 بزرگسال",
    "4 بزرگسال",
    "3 بزرگ سال, 1 کودک",
    "4 بزرگ سال, 2 کودک",
  ];
  const [peopleStatus, setPeopleStatus] = useState("1 بزرگسال");
  const handleSelect = (traveler) => {
    setPeopleStatus(traveler);
    setIsOpen(false);
  };
  return (
    <div className="hidden h-max w-[30%] flex-col rounded-[42px] border border-cardstroke/20 bg-white p-5 lg:flex">
      <div className="flex items-center justify-between gap-4">
        <p className="flex w-[30%] justify-center rounded-full bg-[#FF6588] px-5 py-1 font-rokhM text-xl text-white">
          20%
        </p>
        <h3 className="font-rokhB text-[22px]">
          {prices.tour_per_person} تومان/
          <span className="text-txt/70">هرفرد</span>{" "}
        </h3>
      </div>
      <hr className="mt-5 h-[1px] bg-cardstroke/20" />
      <div className="my-7 flex justify-between">
        <div className="flex flex-col gap-3 text-txt">
          <p className="font-iransansM text-sm">تاریخ شروع</p>
          <button className="flex items-center gap-1 rounded-full bg-[#F5F6FA] px-4 py-3 font-rokhM text-lg text-txt">
            {start}
            <Calendar1 size="19" color="#404040" />
          </button>
        </div>
        <div className="flex flex-col gap-3 text-txt">
          <p className="font-iransansM text-sm">تاریخ شروع</p>
          <button className="flex items-center gap-1 rounded-full bg-[#F5F6FA] px-4 py-3 font-rokhM text-lg text-txt">
            {end}
            <Calendar1 size="19" color="#404040" />
          </button>
        </div>
      </div>
      {/* dropdown */}
      <p className="mb-5 font-iransansM text-sm text-txt">تعداد افراد</p>
      <div className="flex flex-col font-rokhM text-lg text-txt">
        <div
          className="flex cursor-pointer items-center justify-between rounded-full bg-[#F5F6FA] px-4 py-3 transition-all duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {peopleStatus}
          {isOpen ? (
            <ArrowUp2 color="#404040" size={25} />
          ) : (
            <ArrowDown2 color="#404040" size={25} />
          )}
        </div>
        {isOpen && (
          <ul className="mt-4 rounded-[22px] bg-[#F5F6FA] p-4 transition-all duration-500">
            {travelers.map((traveler, index) => (
              <li
                onClick={() => handleSelect(traveler)}
                key={index}
                className="cursor-pointer rounded-[6px] px-2 py-1 hover:bg-primary hover:text-white"
              >
                {traveler}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="my-8 flex cursor-pointer justify-between">
        <h3 className="flex font-iransansM text-txt">
          <span className="-mt-2 ml-[5px] text-[#FF3B3B]">*</span>
          ارسال مدارک مورد نیاز
        </h3>
        <ArrowDown2 color="#404040" size={25} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="font-iransansM text-sm text-txt">مزایا اضافه</p>
          <hr className="h-[3px] w-5 bg-txt" />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center justify-between gap-2">
            <Checkbox size="small" sx={{ padding: 0 }} />
            <p className="font-rokhM text-lg text-txt">هزینه استخر</p>
          </label>
          <p className="font-rokhM text-lg text-txt">90.000 تومان</p>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center justify-between gap-2">
            <Checkbox size="small" sx={{ padding: 0 }} />
            <p className="font-rokhM text-lg text-txt">هزینه ماساژ هر نفر</p>
          </label>
          <p className="font-rokhM text-lg text-txt">200.000 تومان</p>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center justify-between gap-2">
            <Checkbox checked size="small" sx={{ padding: 0 }} />
            <p className="font-rokhM text-lg text-txt">صبحانه برای هر نفر</p>
          </label>
          <p className="font-rokhM text-lg text-txt">60.000 تومان</p>
        </div>
      </div>
      <div className="my-8 text-txt">
        <p className="mb-4 font-iransansM text-sm">هزینه ها</p>
        <div className="flex flex-col gap-5 rounded-[22px] bg-[#F5F6FA] p-4">
          <div className="flex justify-between">
            <p className="font-iransansM">تور 7 روزه</p>
            <p className="font-rokhM text-xl">{prices.tour_7_days} تومان</p>
          </div>
          <div className="flex justify-between">
            <p className="font-iransansM">صبحانه برای هر نفر</p>
            <p className="font-rokhM text-xl">
              {prices.breakfast_per_person} تومان
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-iransansM">هزینه سرویس</p>
            <p className="font-rokhM text-xl">{prices.service_fee} تومان</p>
          </div>
          <div className="flex justify-between">
            <p className="font-iransansM">تخفیف 20%</p>
            <p className="font-rokhM text-xl">{prices.discount}- تومان</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="mb-4 mt-5 font-iransansM text-lg">قیمت نهایی</p>
          <p className="mb-4 mt-5 font-iransansM text-lg">130.000.000 تومان</p>
        </div>
      </div>
      <button className="rounded-full bg-primary py-3 font-iransansB text-lg text-white">
        رزرو کنید
      </button>
    </div>
  );
};
