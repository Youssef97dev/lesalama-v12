"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-primary">
      <h1 className="text-[30.57px] leading-[33.22px] mb-4 uppercase">
        {t("contact.title")}
      </h1>
      <div className="w-full flex justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="firstName">{t("contact.firstname")}</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="lastName">{t("contact.lastname")}</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="email">{t("contact.email")}</label>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="subject">{t("contact.subject")}</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full rounded-md p-2 focus:outline-none"
          rows={4}
        />
      </div>
      <button className="py-4 px-6 border border-primary mr-auto cursor-pointer uppercase">
        {t("contact.send")}
      </button>
    </form>
  );
};

export default ContactForm;
