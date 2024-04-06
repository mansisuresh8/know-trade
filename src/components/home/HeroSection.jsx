import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="text-6xl font-semibold  px-28 py-20">
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
        <div className="py-20">
          <img src="./images/home/hero-section-2.png" alt="" />
        </div>
      </div>
      <section className="bg-[#FF8CF1] px-8 py-8 flex justify-between items-center">
      <div className="grid grid-cols-3 grid-rows-2 ">
        <p className=" text-5xl font-bold">5+</p>
        <p className=" text-5xl font-bold">2000+</p>
        <p className=" text-5xl font-bold">3000+</p>
        <p>5+ Years of Trading Experience</p>
        <p>Mentored 2000 Students Across the world</p>
        <p>A Community of 3000+ Succesfull Traders</p>
      </div>
      </section>
    </section>
  );
};

export default HeroSection;
