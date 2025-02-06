import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MostPopular } from "../components/MostPopular";
import { Tour } from "../components/Tour";

export const TourDetials = () => {
  return (
    <>
      <Header />
      <Tour />
      <MostPopular title={"تور های مشابه"} />
      <Footer />
    </>
  );
};
