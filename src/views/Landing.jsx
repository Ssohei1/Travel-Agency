import React from "react";
import { Hero } from "../components/Hero";
import { MostPopular } from "../components/MostPopular";
import { WhyUs } from "../components/WhyUs";

export const Landing = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <WhyUs />
    </>
  );
};
