import React from "react";
import comment from "../assets/images/comment.svg";
import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";
import user3 from "../assets/images/user3.svg";
import { Dislike, Like1 } from "iconsax-react";
export const Comments = () => {
  return (
    <div className="bg-backgroundlight pt-24">
      <div className="mx-auto flex max-w-[1440px] flex-col p-4">
        <h2 className="relative flex items-center font-rokhB text-xl text-txt after:absolute after:inset-0 after:w-0 after:border-b-2 after:border-primary 450px:text-2xl 500px:text-3xl md:after:top-10 md:after:w-14 lg:text-4xl">
          نظرات
          <img className="mr-1 w-6" src={comment} alt="bomb" />
        </h2>
        {/* comments */}
        <div className="mt-14 flex flex-col gap-5">
          {/* comment */}
          <div className="flex flex-col rounded-[40px] border border-cardstroke/20 bg-white p-6">
            <div className="flex gap-2 font-iransansM">
              <img className="rounded-full object-cover" src={user1} alt="" />
              <div className="flex flex-col">
                <h3 className="text-primary">سارا محمدی</h3>
                <a href="#" className="text-[#3C3C4380]/50">
                  @uharvey
                </a>
              </div>
            </div>
            <p className="my-6 line-clamp-3 text-justify font-iransansM leading-relaxed text-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="flex justify-between">
              <p className="text-[#3C3C4380]">1403.1.12</p>
              <div className="flex gap-4">
                <Like1 className="cursor-pointer" size="22" color="#9D9DA1" />
                <Dislike className="cursor-pointer" size="22" color="#9D9DA1" />
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-[40px] border border-cardstroke/20 bg-white p-6">
            <div className="flex gap-2 font-iransansM">
              <img className="rounded-full object-cover" src={user2} alt="" />
              <div className="flex flex-col">
                <h3 className="text-primary">تینا حسنی</h3>
                <a href="#" className="text-[#3C3C4380]/50">
                  @uharvey
                </a>
              </div>
            </div>
            <p className="my-6 line-clamp-3 text-justify font-iransansM leading-relaxed text-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="flex justify-between">
              <p className="text-[#3C3C4380]">1403.1.12</p>
              <div className="flex gap-4">
                <Like1 className="cursor-pointer" size="22" color="#9D9DA1" />
                <Dislike className="cursor-pointer" size="22" color="#9D9DA1" />
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-[40px] border border-cardstroke/20 bg-white p-6">
            <div className="flex gap-2 font-iransansM">
              <img className="rounded-full object-cover" src={user3} alt="" />
              <div className="flex flex-col">
                <h3 className="text-primary">مهسا رضایی</h3>
                <a href="#" className="text-[#3C3C4380]/50">
                  @uharvey
                </a>
              </div>
            </div>
            <p className="my-6 line-clamp-3 text-justify font-iransansM leading-relaxed text-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="flex justify-between">
              <p className="text-[#3C3C4380]">
                1403.1.12
              </p>
              <div className="flex gap-4">
                <Like1 className="cursor-pointer" size="22" color="#9D9DA1" />
                <Dislike className="cursor-pointer" size="22" color="#9D9DA1" />
              </div>
            </div>
          </div>
          <button className="mt-10 mb-16 rounded-full bg-primary py-4 font-iransansB text-lg text-white 450px:text-xl">
            دیدن همه
          </button>
        </div>
      </div>
    </div>
  );
};
