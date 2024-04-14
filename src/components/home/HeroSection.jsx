import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-between items-center w-full">
      <div className="relative flex justify-between items-center w-full h-full px-20 py-20">
        <div className="text-6xl font-semibold ">
          <p className="">THE ULTIMATE GUIDE</p>
          <p className="py-4">
            TO <span className="text-[#FF8CF1]">GLOBAL MARKETS</span>
          </p>
          <p className="text-xl py-4">
            Maximize Your Profits: Master the Art of Trading with Comprehensive
            Online and Offline Learning.
          </p>
          <section className="text-2xl py-8 flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <div className="bg-[#FF8CF1] text-white rounded-full border px-8 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="font-bold">Register</button>
              </div>
              <div>
                <img src="./images/home/hero-section-1.png" alt="" />
              </div>
            </div>
          </section>
        </div>
        <div className="absolute  flex justify-end items-center w-full bottom-0 right-0">
          <div className="w-2/3">
            <Image
              src={"/images/home/hero-section-2.png"}
              alt=""
              height={500}
              width={500}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-l to-[#FF8CF1] from-[#992FFF] w-full">
        <div className="flex justify-center items-center w-full container px-4 lg:px-20 py-16 ">
          <div className="flex justify-between items-center gap-8 w-full">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className=" text-5xl font-bold">5+</p>
              <p>5+ Years of Trading Experience</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <p className=" text-5xl font-bold">2000+</p>
              <p>Mentored 2000 Students Across the world</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <p className=" text-5xl font-bold">3000+</p>
              <p>A Community of 3000+ Succesfull Traders</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
