import React from "react";
import tower from "../assets/images/tower.svg";
import malezya from "../assets/images/malezya.svg";
import dubai from "../assets/images/dubai.svg";
import antalya from "../assets/images/antalya.svg";
import { Add, ArrowDown2, Star1 } from "iconsax-react";
export const MostPopular = () => {
  return (
    <div className="bg-backgroundlight pt-16">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <div className="flex justify-between">
          <h2 className="relative flex items-center font-rokhB text-4xl text-txt after:absolute after:inset-0 after:w-14 after:border-b-2 after:border-primary">
            محبوب ترین مکان ها
            <img src={tower} alt="" />
          </h2>
          <button className="rounded-full bg-[#EAEAEA] px-6 py-3 font-iransansB text-[1rem] text-txt">
            دیدن همه
          </button>
        </div>
        {/* place boxes */}
        <div className="mt-16 flex justify-center gap-6">
          {/* box */}
          <div className="rounded-[33px] border border-cardstroke/20 p-4">
            <img
              className="mb-7 h-[280px] w-[380px] rounded-[28px]"
              src={antalya}
              alt="antalya"
            />
            <div className="flex flex-col">
              <div className="mb-3 flex justify-between">
                <h3 className="font-iransansB text-2xl text-txt">
                  تور آنتالیا
                </h3>
                <div className="flex gap-2">
                  {/* <Star1 className="" size="32" color="#FFDA19"/> */}
                  <Star1 size="25" color="#ffda19" variant="Bold" />
                  <p className="font-rokhM text-[22px] text-txt">4.1</p>
                </div>
              </div>
              <p className="mb-7 font-iransansM text-lg text-txt/50">
                3 روز و 4 شب
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-1">
                  <h3 className="font-rokhB text-2xl text-txt">
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
          <div className="rounded-[33px] border border-cardstroke/20 p-4">
            <img
              className="mb-7 h-[280px] w-[380px] rounded-[28px]"
              src={dubai}
              alt="dubai"
            />
            <div className="flex flex-col">
              <div className="mb-3 flex justify-between">
                <h3 className="font-iransansB text-2xl text-txt">تور دبی</h3>
                <div className="flex gap-2">
                  {/* <Star1 className="" size="32" color="#FFDA19"/> */}
                  <Star1 size="25" color="#ffda19" variant="Bold" />
                  <p className="font-rokhM text-[22px] text-txt">4.9</p>
                </div>
              </div>
              <p className="mb-7 font-iransansM text-lg text-txt/50">
                3 روز و 4 شب
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-1">
                  <h3 className="font-rokhB text-2xl text-txt">
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
          <div className="rounded-[33px] border border-cardstroke/20 p-4">
            <img
              className="mb-7 h-[280px] w-[380px] rounded-[28px]"
              src={malezya}
              alt="malezya"
            />
            <div className="flex flex-col">
              <div className="mb-3 flex justify-between">
                <h3 className="font-iransansB text-2xl text-txt">تور مالزی</h3>
                <div className="flex gap-2">
                  {/* <Star1 className="" size="32" color="#FFDA19"/> */}
                  <Star1 size="25" color="#ffda19" variant="Bold" />
                  <p className="font-rokhM text-[22px] text-txt">4.1</p>
                </div>
              </div>
              <p className="mb-7 font-iransansM text-lg text-txt/50">
                3 روز و 4 شب
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-1">
                  <h3 className="font-rokhB text-2xl text-txt">
                    85.000.000 تومان
                  </h3>
                  <p className="font-iransansM text-txt/50">هر فرد</p>
                </div>
                <button className="rounded-full bg-primary p-3">
                  <Add size="28" color="#FFF" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto m2-10 rounded-full bg-[#D3D3D3] p-3">
          <ArrowDown2 size={30} color="#FFF" />
        </button>
      </div>
    </div>
  );
};
