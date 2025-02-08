import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-backgroundlight">
      <div className="mx-auto flex max-w-[1440px] justify-center p-4 font-iransansM lg:pt-10">
        <div className="flex w-full flex-col-reverse justify-center gap-10 lg:flex-row lg:items-center lg:gap-6 1300px:gap-16">
          <div className="flex w-full flex-col lg:w-[40%] 1300px:w-[30%]">
            <h2 className="mb-8 text-2xl text-txt lg:mb-14 lg:text-3xl">
              خوش آمدید
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h2 className="mb-5 hidden text-xl text-txt lg:block">ثبت نام</h2>
              <input
                minLength={11}
                required
                type="text"
                inputMode="numeric"
                className="mb-3 h-full w-full rounded-full border border-cardstroke/25 bg-white p-3 text-txt outline-none focus:border-primary 500px:p-4"
                placeholder="شماره همراه"
              />
              <div className="relative mb-3">
                <input
                  minLength={8}
                  required
                  type={passwordShow ? "text" : "password"}
                  className="h-full w-full rounded-full border border-cardstroke/25 bg-white p-3 text-txt outline-none focus:border-primary 500px:p-4"
                  placeholder="رمز عبور"
                />
                {passwordShow ? (
                  <Eye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="20"
                    color="#d0d0d0"
                  />
                ) : (
                  <EyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="20"
                    color="#d0d0d0"
                  />
                )}
              </div>
              <div className="relative mb-10">
                <input
                  minLength={8}
                  required
                  type={passwordShow ? "text" : "password"}
                  className="h-full w-full rounded-full border border-cardstroke/25 bg-white p-3 text-txt outline-none focus:border-primary 500px:p-4"
                  placeholder="تکرار رمز عبور"
                />
                {passwordShow ? (
                  <Eye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="20"
                    color="#d0d0d0"
                  />
                ) : (
                  <EyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="20"
                    color="#d0d0d0"
                  />
                )}
              </div>
              <button className="rounded-full bg-[#E2E2E2] py-2 text-xl text-white hover:bg-primary 500px:py-3 500px:text-[22px]">
                ارسال
              </button>
              <Link
                to="#"
                className="my-10 text-center text-[14px] text-txt 500px:text-lg"
              >
                رمز عبور خود را فراموش کرده اید؟{" "}
                <span className="text-primary">بازیابی رمز عبور</span>
              </Link>
            </form>
            <div className="relative flex items-center">
              <hr className="absolute h-[2px] w-full bg-cardstroke/25" />
              <p className="z-50 mx-auto w-fit bg-[#FEF9F5] px-10 py-3 text-lg text-[#A6A6A6]">
                ثبت نام با
              </p>
            </div>
            <button className="mb-5 mt-8 flex justify-center gap-3 rounded-full border border-cardstroke/25 bg-white py-2 text-lg text-txt hover:border-primary 500px:py-3 500px:text-xl">
              Google
              <img src="/images/google.svg" alt="google" className="w-5" />
            </button>
            <p className="mb-4 text-center text-txt 500px:text-lg">
              عضو سفرکن هستید؟{" "}
              <Link to="/login" className="text-primary">
                ورود
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-[60%] 1300px:w-[70%]">
            <img
              className="rounded-[30px] object-cover 550px:rounded-[50px] lg:h-[900px]"
              src="/images/login.png"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
