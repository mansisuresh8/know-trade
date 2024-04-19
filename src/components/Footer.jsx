import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col justify-between items-center">
      <div className="flex justify-start items-center bg-[#070A29] px-20 py-20">
        <div className="w-72">
          <Image
            src={"/images/header/header-logo.png"}
            height={50}
            width={200}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-col justify-between items-start w-1/2 px-16">
          <p className="w-2/3 text-lg ">
            Have questions, feedback, or just want to say hello? <br />
            We're here for you! Reach out to us anytime and let's start a
            conversation about how we can help you on your journey to wellness.
            Let's connect and explore the possibilities together.
          </p>
          <div className="w-96 py-4">
            <img src="/images/footer/footer-group.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-4">
          <p className="text-xl">
            Zenco Colony, Viman Nagar, New Delhi- 110022
          </p>
          <p className="text-xl">+91-9656382714</p>
          <p className="text-xl">KnowTrade@gmail.com</p>
        </div>
      </div>
      <section className="flex flex-row justify-between items-center bg-[#B64AFC] w-full px-20 py-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-4">
            <p className="underline underline-offset-4 text-lg">
              Privacy Policy
            </p>
            <p className="underline underline-offset-4 text-lg">
              Terms of Service
            </p>
            <p className="underline underline-offset-4 text-lg">
              Cookies Settings
            </p>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-lg">
              Copyright © 2022 GridUp. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
