import React, { useEffect, useState } from "react";
import tower from "../assets/images/tower.svg";
import { Add, ArrowDown2, Star1 } from "iconsax-react";
import axios from "axios";
export const MostPopular = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/tours")
      .then((response) => setTours(response.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="bg-backgroundlight pt-16">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <div className="flex justify-between">
          <h2 className="relative flex items-center font-rokhB text-xl text-txt after:absolute after:inset-0 after:w-0 after:border-b-2 after:border-primary md:text-3xl md:after:top-10 md:after:w-14 lg:text-4xl">
            محبوب ترین مکان ها
            <img src={tower} alt="tower" />
          </h2>
          <button className="rounded-full bg-[#EAEAEA] px-3 py-3 font-iransansM text-xs text-txt 360px:px-6 360px:text-[1rem]">
            دیدن همه
          </button>
        </div>
        {/* place boxes */}
        <div className="mt-16 flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap">
          {/* box */}

          {tours.map((tour) => (
            <div key={tour.id} className="w-full cursor-pointer rounded-[33px] border border-cardstroke/20 p-4 880px:w-auto lg:w-[30%]">
              <div className="mb-7">
                <img
                  className="w-full rounded-[28px]"
                  src={tour.image}
                  alt="antalya"
                />
              </div>
              <div className="flex flex-col">
                <div className="mb-3 flex justify-between">
                  <h3 className="font-iransansB text-2xl text-txt">
                    تور {tour.city}
                  </h3>
                  <div className="flex gap-2">
                    <Star1 size="25" color="#ffda19" variant="Bold" />
                    <p className="font-rokhM text-[22px] text-txt">{tour.rating}</p>
                  </div>
                </div>
                <p className="mb-7 font-iransansM text-lg text-txt/50">
                  {tour.days} روز و {tour.nights} شب
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-1">
                    <h3 className="font-rokhB text-xl text-txt sm:text-2xl">
                     {tour.prices.tour_per_person} تومان
                    </h3>
                    <p className="font-iransansM text-txt/50">هر فرد</p>
                  </div>
                  <button className="rounded-full bg-primary p-3">
                    <Add size="28" color="#FFF" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="w-full cursor-pointer rounded-[33px] border border-cardstroke/20 p-4 880px:w-auto lg:w-[30%]">
            <div className="mb-7">
              <img
                className="w-full rounded-[28px]"
                src={antalya}
                alt="antalya"
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-3 flex justify-between">
                <h3 className="font-iransansB text-2xl text-txt">
                  تور آنتالیا
                </h3>
                <div className="flex gap-2">
                  <Star1 size="25" color="#ffda19" variant="Bold" />
                  <p className="font-rokhM text-[22px] text-txt">4.1</p>
                </div>
              </div>
              <p className="mb-7 font-iransansM text-lg text-txt/50">
                3 روز و 4 شب
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-1">
                  <h3 className="font-rokhB text-xl text-txt sm:text-2xl">
                    45.000.000 تومان
                  </h3>
                  <p className="font-iransansM text-txt/50">هر فرد</p>
                </div>
                <button className="rounded-full bg-primary p-3">
                  <Add size="28" color="#FFF" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full cursor-pointer rounded-[33px] border border-cardstroke/20 p-4 880px:w-auto lg:w-[30%]">
            <div className="mb-7">
              <img className="w-full rounded-[28px]" src={dubai} alt="dubai" />
            </div>
            <div className="flex flex-col">
              <div className="mb-3 flex justify-between">
                <h3 className="font-iransansB text-2xl text-txt">تور دبی</h3>
                <div className="flex gap-2">
                  <Star1 size="25" color="#ffda19" variant="Bold" />
                  <p className="font-rokhM text-[22px] text-txt">4.9</p>
                </div>
              </div>
              <p className="mb-7 font-iransansM text-lg text-txt/50">
                3 روز و 4 شب
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-1">
                  <h3 className="font-rokhB text-xl text-txt sm:text-2xl">
                    65.000.000 تومان
                  </h3>
                  <p className="font-iransansM text-txt/50">هر فرد</p>
                </div>
                <button className="rounded-full bg-primary p-3">
                  <Add size="28" color="#FFF" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full cursor-pointer rounded-[33px] border border-cardstroke/20 p-4 880px:w-auto lg:w-[30%]">
            <div className="mb-7">
              <img
                className="w-full rounded-[28px]"
                src={malezya}
                alt="malezya"
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-3 flex justify-between">
                <h3 className="font-iransansB text-2xl text-txt">تور مالزی</h3>
                <div className="flex gap-2">
                  <Star1 size="25" color="#ffda19" variant="Bold" />
                  <p className="font-rokhM text-[22px] text-txt">4.1</p>
                </div>
              </div>
              <p className="mb-7 font-iransansM text-lg text-txt/50">
                3 روز و 4 شب
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-1">
                  <h3 className="font-rokhB text-xl text-txt sm:text-2xl">
                    85.000.000 تومان
                  </h3>
                  <p className="font-iransansM text-txt/50">هر فرد</p>
                </div>
                <button className="rounded-full bg-primary p-3">
                  <Add size="28" color="#FFF" />
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <button className="mx-auto my-10 rounded-full bg-[#D3D3D3] p-3">
          <ArrowDown2 size={25} color="#FFF" />
        </button>
      </div>
    </div>
  );
};
