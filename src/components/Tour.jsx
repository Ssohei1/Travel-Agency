import axios from "axios";
import { ArchiveAdd, ArrowLeft, ArrowRight } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Prices } from "./Prices";
import { CustomAccordion } from "./CustomAccordion";

export const Tour = () => {
  const { slug } = useParams();
  const [tour, setTour] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/tours")
      .then((response) => {
        const foundTour = response.data.find((tour) => tour.slug === slug);
        setTour(foundTour);
      })
      .catch((err) => alert(err));
  }, [slug]);
  if (!tour) return <p>در حال بارگذاری</p>;
  return (
    <div className="bg-backgroundlight pt-1">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <div className="hidden justify-between font-rokhM text-xl text-txt lg:flex 1300px:text-2xl">
          <Link to="/">
            {tour.tour_type}/{tour.continent}/{tour.country}/{tour.city}
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-[24px] border-2 border-cardstroke/20 px-4 py-3"
          >
            بازگشت به خانه
            <ArrowLeft size={20} color="#404040" />
          </Link>
        </div>
        {/* mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <h1 className="font-rokhB text-xl text-txt 500px:text-2xl">
            تور {tour.total_days} روزه {tour.country}/{tour.city}
          </h1>
          <div className="rounded-full bg-[#F5F6FA] p-3">
            <ArchiveAdd size="28" color="#404040" />
          </div>
        </div>
        <Link
          to="/"
          className="block font-rokhM text-lg text-txt 500px:text-xl lg:hidden"
        >
          {tour.tour_type} / تور{" "}
          <span className="opacity-60">{tour.continent}</span>
        </Link>
        {/* img */}
        <div className="relative mx-auto my-10 flex items-center">
          <img
            src={tour.heroImage}
            alt={tour.city}
            className="550px:rounded-[40px] max-h-[300px] w-[1440px] rounded-[30px] object-cover 500px:max-h-[400px] 880px:max-h-[600px] 880px:rounded-[50px]"
          />
          <div className="absolute left-0 right-0 top-5 mx-auto flex w-[95%] items-center gap-3 rounded-[25px] bg-[#c1c1c1]/20 p-4 font-iransansM text-white 880px:top-10">
            <h3 className="550px:text-xl text-lg 880px:text-2xl">
              {tour.city}
            </h3>
            <div className="ml-2 flex gap-2">
              <ArrowRight
                size={30}
                color="#FFF"
                className="cursor-pointer rounded-full border-2 p-1"
              />
              <ArrowLeft
                size={30}
                color="#FFF"
                className="cursor-pointer rounded-full border-2 p-1"
              />
            </div>
            <span className="h-[2px] w-full bg-white/50"></span>
            <h3 className="550px:text-xl text-lg 880px:text-2xl">
              1/<span className="opacity-50">3</span>
            </h3>
          </div>
          <div className="absolute bottom-2 left-4 flex items-center gap-2 rounded-[33px] bg-white px-2 py-1 880px:bottom-4">
            <h3 className="font-iransansB text-txt 880px:text-xl">
              {tour.country_en}
            </h3>
            <img
              src={tour.flag}
              alt={tour.country_en}
              className="h-6 w-6 rounded-full 880px:h-12 880px:w-12"
            />
          </div>
        </div>
        {/* tour details */}
        <div className="flex gap-4">
          <div className="flex w-full flex-col lg:w-[70%]">
            <div className="hidden items-center justify-between lg:flex">
              <h1 className="font-rokhB text-3xl text-txt">
                تور {tour.total_days} روزه {tour.country}/{tour.city}
              </h1>
              <div className="rounded-full bg-[#F5F6FA] p-3">
                <ArchiveAdd size="28" color="#404040" />
              </div>
            </div>
            <Link
              to="/"
              className="hidden font-rokhM text-xl text-txt lg:block"
            >
              {tour.tour_type} / تور{" "}
              <span className="opacity-60">{tour.continent}</span>
            </Link>
            <ul className="550px:text-2xl mt-8 flex flex-wrap items-center gap-7 border-b-[1px] border-cardstroke/20 font-rokhM text-xl text-txt">
              <li className="text-primary">بررسی</li>
              <li className="">مکان ها</li>
              <li className="">قوانین</li>
              <li className="">میزبان تور</li>
              <li className="">نظرات</li>
              <li className="">...</li>
            </ul>
            <div className="my-8 text-justify font-iransansM leading-relaxed text-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت.
            </div>
            {/* mobile */}
            <div className="my-8 flex justify-between lg:hidden">
              <h3 className="font-rokhB text-lg text-txt 500px:text-[22px]">
                {tour.prices.tour_per_person} تومان
              </h3>
              <button className="rounded-full bg-primary px-5 py-1 font-iransansB text-lg text-white 500px:px-10 500px:py-3 500px:text-xl">
                رزرو کنید
              </button>
            </div>
            <hr className="border-cardstroke/20" />
            {/*  */}
            <h3 className="mb-3 mt-8 font-rokhM text-[22px] text-txt">
              ویژگی ها
            </h3>
            <div className="flex flex-wrap gap-5 font-rokhN text-lg 880px:gap-8">
              <p className="flex items-center gap-2 880px:gap-3">
                <img src="/images/pizza.svg" alt="pizza" />
                ناهار رایگان
              </p>
              <p className="flex items-center gap-2 880px:gap-3">
                <img src="/images/wifi.svg" alt="wifi" />
                وای فای رایگان
              </p>
              <p className="flex items-center gap-2 880px:gap-3">
                <img src="/images/coffe.svg" alt="coffe" />
                میان وعده رایگان
              </p>
              <p className="flex items-center gap-2 880px:gap-3">
                <img src="/images/medical.svg" alt="medical" />
                بیمه مسافرتی
              </p>
            </div>
            {/*  */}
            <hr className="my-8 border-cardstroke/20" />
            <h3 className="mb-8 font-rokhM text-[22px] text-txt">
              برنامه تور (روز به روز)
            </h3>
            <CustomAccordion />
          </div>
          <Prices
            prices={tour.prices}
            start={tour.start_date}
            end={tour.end_date}
          />
        </div>
      </div>
    </div>
  );
};
