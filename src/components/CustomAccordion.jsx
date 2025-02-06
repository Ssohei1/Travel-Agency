import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
export const CustomAccordion = () => {
  return (
    <>
      {[
        "روز اول",
        "روز دوم",
        "روز سوم",
        "روز چهارم",
        "روز پنجم",
        "روز ششم",
        "روز هفتم",
      ].map((day, index) => (
        <Accordion
        TransitionProps={{ timeout: 500 }}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderTop: "0",
            "&:first-of-type::before": { display: "none" },
            "&::before": { height: 0 },
          }}
          key={index}
        >
          <AccordionSummary className="w-full" expandIcon={<ExpandMore />}>
            <div className="w-full text-txt">
              <Typography
                sx={{
                  fontFamily: "RokhM",
                  fontSize: "18px",
                }}
              >
                {day}
              </Typography>
              <hr className="mt-3 w-full border-cardstroke/20" />
            </div>
          </AccordionSummary>
          <AccordionDetails className="font-iransansM text-txt">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
