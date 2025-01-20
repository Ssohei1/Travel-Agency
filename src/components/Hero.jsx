import React from "react";
import beach from "../assets/images/beach.svg";
import travelling from "../assets/images/travelling.svg";
export const Hero = () => {
  return (
    <div className="mx-auto flex max-w-[1440px] p-4">
      <div className="flex flex-col">
        <div className="my-10 flex max-w-[300px] items-center gap-2 rounded-full border border-[#FF782C40] bg-[#FFAA7C33] px-5 py-3 font-rokhM text-[18px] text-secondary">
          <img className="w-6" src={beach} alt="beach" />
          بسیار سفر باید تا پخته شود خامی
        </div>
        <h1 className="font-rokhB text-6xl leading-normal">
          دنیا را کشف کنید
          <br /> زندگی را{" "}
          <span className="text-primary">
            تجربه
            <br />
          </span>
          <span className="flex gap-3">
            کنید <img className="" src={travelling} alt="travelling" />
          </span>
        </h1>
      </div>
    </div>
  );
};
