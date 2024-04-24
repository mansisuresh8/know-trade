import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full lg:h-screen">
      <div className="relative flex flex-col lg:flow-row justify-center items-center lg:items-start w-full h-full px-4 lg:px-20 py-10 lg:py-20">
        <div className="space-y-2 lg:space-y-4 w-full lg:w-1/2">
          <p className="text-3xl lg:text-6xl font-semibold">
            THE ULTIMATE GUIDE
          </p>
          <p className="text-3xl lg:text-6xl font-semibold">
            TO <span className="text-[#FF8CF1]">GLOBAL MARKETS</span>
          </p>
          <p className="text-lg lg:text-xl">
            Maximize Your Profits: Master the Art of Trading with Comprehensive
            Online and Offline Learning.
          </p>
          <section className=" py-4 lg:py-8 flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <button className="bg-[#FF8CF1] text-white rounded-full border px-6 lg:px-8 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 font-bold lg:text-2xl">
                Register
              </button>

              <div>
                <img src="./images/home/hero-section-1.png" alt="" />
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center lg:justify-end items-center lg:items-end lg:absolute bottom-0 right-0 w-full lg:w-3/5">
          <div className="w-full">
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
        <div className="flex justify-center items-center w-full  py-16 container px-4 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-xl lg:text-5xl font-bold">5+</p>
              <p className="text-center">5+ Years of Trading Experience</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-xl lg:text-5xl font-bold">2000+</p>
              <p className="text-center">
                Mentored 2000 Students Across the world
              </p>
            </div>

            <div className="flex flex-col justify-center items-center col-span-2 lg:col-span-1 gap-1">
              <p className="text-xl lg:text-5xl font-bold">3000+</p>
              <p className="text-center">
                A Community of 3000+ Succesfull Traders
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
