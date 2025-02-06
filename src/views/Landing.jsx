import React from "react";
import { Hero } from "../components/Hero";
import { MostPopular } from "../components/MostPopular";
import { WhyUs } from "../components/WhyUs";
import { BestSelling } from "../components/BestSelling";
import { DownloadApp } from "../components/DownloadApp";
import { Comments } from "../components/Comments";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <MostPopular title={"محبوب ترین مکان ها"} />
      <WhyUs />
      <BestSelling />
      <DownloadApp />
      <Comments />
      <Footer />
    </>
  );
};
