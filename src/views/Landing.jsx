import React from "react";
import { Hero } from "../components/Hero";
import { MostPopular } from "../components/MostPopular";
import { WhyUs } from "../components/WhyUs";
import { BestSelling } from "../components/BestSelling";
import { DownloadApp } from "../components/DownloadApp";

export const Landing = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <WhyUs />
      <BestSelling />
      <DownloadApp />
    </>
  );
};
