import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col justify-between items-center w-full">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center bg-[#070A29] px-4 lg:px-20 py-20 w-full">
       <div className="flex justify-center items-start w-full">
       <div className="w-3/4 lg:w-40">
          <Image
            src={"/images/header/header-logo.png"}
            height={50}
            width={200}
            className="object-contain w-3/4 lg:w-40"
          />
        </div>
       </div>
        <div className="flex flex-col justify-between items-center lg:w-full w-1/2 px-4 lg:px-16 py-4">
          <p className="lg:w-full w-60 text-sm lg:text-lg">
            Have questions, feedback, or just want to say hello? <br />
            We&apos;re here for you! Reach out to us anytime and let&apos;s start a
            conversation about how we can help you on your journey to wellness.
            Let&apos;s connect and explore the possibilities together.
          </p>
          <div className="w-56 lg:w-96 py-4">
            <img src="/images/footer/footer-group.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 w-full">
          <p className="text-sm lg:text-xl">
            Zenco Colony, Viman Nagar, New Delhi- 110022
          </p>
          <p className="text-sm lg:text-xl">+91-9656382714</p>
          <p className="text-sm lg:text-xl">KnowTrade@gmail.com</p>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row justify-between items-center bg-[#B64AFC] w-full px-4 py-4">
        <div className="flex  flex-col lg:flex-row justify-between lg:items-start items-center w-full">
          <div className="flex flex-row justify-center items-center gap-4 w-64 lg:w-full">
            <p className="underline underline-offset-4 text-sm lg:text-lg">
              Privacy Policy
            </p>
            <p className="underline underline-offset-4 text-sm lg:text-lg">
              Terms of Service
            </p>
            <p className="underline underline-offset-4 text-sm lg:text-lg">
              Cookies Settings
            </p>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-sm lg:text-lg">
              Copyright © 2022 GridUp. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
