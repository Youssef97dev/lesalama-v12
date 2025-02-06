"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-96 text-primary">
      <h1 className="text-[30px] lg:text-[48px] lg:leading-[48px] leading-[36px] uppercase">
        Le Salama Restaurant
      </h1>
      <p className="text-[14px] leading-[24.5px]">
        {t("about.content_1")}
        <br />
        <br />
        {t("about.content_2")}

        {t("about.content_3")}
        <br />
        <br />
        {t("about.content_4")}
        <br />
        <br />
        {t("about.content_5")}
      </p>
    </div>
  );
};

export default About;
