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
      <div className="item mx-auto flex max-w-[1440px] justify-center p-4 pt-5 font-iransansM 1300px:pt-20">
        <div className="flex w-full flex-col-reverse justify-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex w-full flex-col lg:w-[50%]">
            <h2 className="mb-5 text-2xl text-txt 1300px:text-3xl">
              خوش آمدید
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h2 className="mb-5 hidden text-xl text-txt lg:block">ثبت نام</h2>
              <input
                className="mb-3 h-full w-full rounded-full border border-cardstroke/25 bg-white p-3 text-txt outline-none focus:border-primary"
                minLength={11}
                required
                type="text"
                inputMode="numeric"
                placeholder="شماره همراه"
              />
              <div className="relative mb-3">
                <input
                  className="h-full w-full rounded-full border border-cardstroke/25 bg-white p-3 text-txt outline-none focus:border-primary"
                  minLength={8}
                  required
                  type={passwordShow ? "text" : "password"}
                  placeholder="رمز عبور"
                />
                {passwordShow ? (
                  <Eye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="18"
                    color="#d0d0d0"
                  />
                ) : (
                  <EyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="18"
                    color="#d0d0d0"
                  />
                )}
              </div>
              <div className="relative mb-3 lg:mb-5">
                <input
                  className="h-full w-full rounded-full border border-cardstroke/25 bg-white p-3 text-txt outline-none focus:border-primary"
                  minLength={8}
                  required
                  type={passwordShow ? "text" : "password"}
                  placeholder="تکرار رمز عبور"
                />
                {passwordShow ? (
                  <Eye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="18"
                    color="#d0d0d0"
                  />
                ) : (
                  <EyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute inset-y-0 left-3 my-auto"
                    size="18"
                    color="#d0d0d0"
                  />
                )}
              </div>
              <div className="mb-5 flex flex-col-reverse gap-5 lg:flex-col">
                <button className="rounded-full bg-primary py-2 text-xl text-white">
                  ارسال
                </button>
                <p className="hidden text-[15px] text-primary lg:inline-block lg:text-center lg:text-txt">
                  رمز عبور خود را فراموش کرده اید؟{" "}
                  <Link to="#" className="hidden text-primary lg:inline-block">
                    بازیابی رمز عبور
                  </Link>
                </p>
                <Link
                  to="#"
                  className="mr-2 text-[15px] text-primary lg:hidden lg:text-center lg:text-txt"
                >
                  رمز عبور خود را فراموش کرده اید؟
                </Link>
              </div>
            </form>
            <div className="relative flex items-center">
              <hr className="absolute h-[2px] w-full bg-cardstroke/25" />
              <p className="z-50 mx-auto w-fit bg-[#FEF9F5] px-10 py-2 text-lg text-[#A6A6A6]">
                ثبت نام با
              </p>
            </div>
            <button className="my-5 flex justify-center gap-3 rounded-full border border-cardstroke/25 bg-white py-2 text-lg text-txt hover:border-primary 500px:text-xl lg:my-2">
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
          <div className="w-full lg:w-[50%]">
            <img
              className="w-full rounded-[30px] object-cover 550px:rounded-[50px] 880px:h-[600px]"
              src="/images/login.png"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
