import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-primary z-40">
      <h1 className="text-[30.57px] leading-[33.22px] mb-4 uppercase">
        Get in Touch
      </h1>
      <div className="w-full flex justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="subject">Subject</label>
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
      <button className="py-4 px-6 border border-primary mr-auto cursor-pointer">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
