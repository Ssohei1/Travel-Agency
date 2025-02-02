import React from "react";
import myket from "../assets/images/myket.svg";
import bazar from "../assets/images/bazar.svg";
import bazartxt from "../assets/images/bazartext.svg";
import desktop from "../assets/images/Desktop.svg";
export const DownloadApp = () => {
  return (
    <div className="bg-backgroundlight pt-28 880px:pt-16">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <div className="flex flex-col rounded-[50px] 450px:rounded-[58px] bg-primary bg-center bg-no-repeat px-6 pb-16 880px:bg-[url('/public/images/bg2.png')] 880px:px-0 880px:py-16">
          <div className="relative bottom-[70px] flex w-full justify-center 880px:hidden">
            <img className="z-30 w-[500px]" src={desktop} alt="desktopShot" />
          </div>
          <h2 className="880px:text-center font-rokhB text-xl 450px:text-2xl 880px:text-3xl leading-relaxed text-white">
            برنامه سفرکن را دانلود کنید تا از آخرین ویژگی های این
            <br className="hidden 880px:block" /> برنامه در تلفن همراه بهره مند شوید
          </h2>
          <div className="mt-14 flex w-full flex-col justify-center gap-4 880px:flex-row">
            <button className="flex w-full items-center justify-center gap-1 rounded-full bg-white p-2 font-iransansL text-xl 880px:w-auto">
              دریافت از
              <img src={bazartxt} alt="" />
              <img className="" src={bazar} alt="" />
            </button>
            <button className="flex w-full items-center justify-center gap-1 rounded-full bg-white p-2 font-iransansL text-xl 880px:w-auto">
              <img className="" src={myket} alt="" />
              دریافت از<span className="font-iransansB">مایکت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
