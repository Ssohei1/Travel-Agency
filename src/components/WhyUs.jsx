import React from "react";
import questionmark from "../assets/images/questionmark.svg";
import plane from "../assets/images/plane.svg";
import clock from "../assets/images/clock.svg";
import dollarsign from "../assets/images/dollarsign.svg";
export const WhyUs = () => {
  return (
    <div className="bg-backgroundlight pt-16 ">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4 880px:bg-[url('/public/images/bg.png')]">
        <h2 className="relative mb-12 flex items-center font-rokhB text-xl text-txt after:absolute after:inset-0 after:top-11 after:w-0 after:border-b-2 after:border-primary md:text-3xl md:after:w-10 1300px:text-4xl">
          چرا سفر کن
          <img
            className="w-[28px] 880px:w-[auto]"
            src={questionmark}
            alt="questionmark"
          />
        </h2>
          {/* boxes */}
          <div className="450px:rounded-[50px] flex w-full flex-wrap justify-center gap-10 rounded-[40px] bg-primary px-10 py-16 lg:flex-nowrap lg:py-10">
            {/* box */}
            <div className="lg:auto 450px:rounded-[28px] relative flex w-full flex-col items-center rounded-[20px] bg-[#7D8BFF] p-6 text-white after:absolute after:inset-0 after:-top-4 after:mx-auto after:h-32 after:w-32 after:rounded-full after:bg-[#7D8BFF]">
              {/* <span className="after:absolute after:inset-0 after:-left-[206px] after:-top-[38px]
               after:z-40 after:mx-auto after:h-10 after:w-[39%] after:rounded-r-full after:bg-primary"></span>
              <span className="after:absolute after:inset-0 after:-right-[206px] after:-top-[38px]
               after:z-40 after:mx-auto after:h-10 after:w-[39%] after:rounded-l-full after:bg-primary"></span> */}
              <div className="z-[50] mb-8 rounded-full bg-[#3E72F973] p-2">
                <img className="mx-auto w-[90%]" src={clock} alt="clock" />
              </div>
              <h2 className="mb-6 font-iransansM text-[18px] 360px:text-xl">
                پشتیبانی 24 ساعته
              </h2>
              <p className="text-center font-iransansL leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.{" "}
              </p>
            </div>
            {/* box */}
            <div className="lg:auto 450px:rounded-[28px] relative flex w-full flex-col items-center rounded-[20px] bg-[#7D8BFF] p-6 text-white after:absolute after:inset-0 after:-top-4 after:mx-auto after:h-32 after:w-32 after:rounded-full after:bg-[#7D8BFF]">
              <div className="z-[50] mb-8 rounded-full bg-[#3E72F973] p-2">
                <img
                  className="mx-auto w-[90%]"
                  src={dollarsign}
                  alt="dollarsign"
                />
              </div>
              <h2 className="mb-6 font-iransansM text-[18px] 360px:text-xl">
                ضمانت بهترین قیمت
              </h2>
              <p className="text-center font-iransansL leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.{" "}
              </p>
            </div>
            {/* box */}
            <div className="lg:auto 450px:rounded-[28px] relative flex w-full flex-col items-center rounded-[20px] bg-[#7D8BFF] p-6 text-white after:absolute after:inset-0 after:-top-4 after:mx-auto after:h-32 after:w-32 after:rounded-full after:bg-[#7D8BFF]">
              <div className="z-[50] mb-8 rounded-full bg-[#3E72F973] p-2">
                <img className="mx-auto w-[90%]" src={plane} alt="plane" />
              </div>
              <h2 className="mb-6 font-iransansM text-[18px] 360px:text-xl">
                رزرو آنلاین
              </h2>
              <p className="text-center font-iransansL leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.{" "}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};
