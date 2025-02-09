import React, { useEffect, useState } from "react";
import bomb from "../assets/images/bomb.svg";
import { Add, ArrowDown2, Setting4, Star1 } from "iconsax-react";
import axios from "axios";
import { Link } from "react-router-dom";
export const BestSelling = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/tours")
      .then((response) => {
        const data = response.data;
        const repeatedData = [...data, ...data];
        setTours(repeatedData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="bg-backgroundlight pt-16">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6 880px:flex-row 880px:items-center 880px:gap-0">
            <h2 className="relative flex items-center font-rokhB text-xl text-txt after:absolute after:inset-0 after:w-0 after:border-b-2 after:border-primary 450px:text-2xl 500px:text-3xl md:after:top-10 md:after:w-14 1300px:text-4xl">
              پرفروش ترین تور ها
              <img className="w-11" src={bomb} alt="bomb" />
            </h2>

            <ul className="450:gap-3 mr-0 flex gap-2 font-rokhB text-[14px] text-txt 450px:text-base 500px:gap-6 500px:text-[18px] 880px:mr-1">
              <li className="relative cursor-pointer after:absolute after:inset-0 after:w-full after:border-b after:border-cardstroke">
                همه تور ها
              </li>
              <li className="cursor-pointer text-txt/65">تور ایران</li>
              <li className="cursor-pointer text-txt/65">تور اروپا</li>
              <li className="cursor-pointer text-txt/65">تور آسیا</li>
            </ul>
          </div>
          <div className="flex flex-col-reverse items-end gap-6 880px:flex-row 880px:items-center">
            <Setting4 className="ml-3" size="24" color="#404040" />
            <button className="rounded-full bg-[#EAEAEA] px-3 py-3 font-iransansM text-xs text-txt 360px:px-6 360px:text-[1rem]">
              دیدن همه
            </button>
          </div>
        </div>
        {/* place boxes */}
        <div className="mt-16 flex w-full flex-wrap justify-center gap-6">
          {/* box */}
          {tours.map((tour, index) => (
            <div
              key={`${tour.id}-${index}`}
              className="w-full rounded-[33px] border border-cardstroke/20 p-4 880px:w-auto lg:w-[30%]"
            >
              <div className="mb-7">
                <img
                  className="w-full rounded-[28px]"
                  src={tour.image}
                  alt="antalya"
                />
              </div>
              <div className="flex flex-col">
                <div className="mb-3 flex justify-between">
                  <Link
                    to={`/tour/${tour.slug}`}
                    className="font-iransansB text-xl text-txt transition-all duration-300 hover:text-primary 1300px:text-2xl"
                  >
                    تور {tour.city}
                  </Link>
                  <div className="flex gap-2">
                    <Star1 size="25" color="#ffda19" variant="Bold" />
                    <p className="font-rokhM text-[22px] text-txt">
                      {tour.rating}
                    </p>
                  </div>
                </div>
                <p className="mb-7 font-iransansM text-lg text-txt/50">
                  {tour.nights} روز و {tour.days} شب
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-1">
                    <h3 className="font-rokhB text-xl text-txt sm:text-2xl">
                      {tour.prices.tour_per_person} تومان
                    </h3>
                    <p className="font-iransansM text-txt/50">هر فرد</p>
                  </div>
                  <button className="rounded-full bg-primary p-2 1300px:p-3">
                    <Add size="28" color="#FFF" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto my-10 rounded-full bg-[#D3D3D3] p-3">
          <ArrowDown2 size={25} color="#FFF" />
        </button>
      </div>
    </div>
  );
};
