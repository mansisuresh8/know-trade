import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center px-20 py-20">
      <div className="text-6xl font-semibold">
        <p className="">THE ULTIMATE GUIDE</p>
        <p className="py-4">
          TO <span className="text-[#FF8CF1]">GLOBAL MARKETS</span>
        </p>
        <p className="text-xl">
          Maximize Your Profits: Master the Art of Trading with Comprehensive
          Online and Offline Learning.
        </p>
        <section className="text-2xl py-8 flex justify-between items-center">
          <div className="bg-[#FF8CF1] text-white rounded-full border px-8 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <button className="font-bold">Register</button>
          </div>
        </section>
      </div>

      <div></div>
    </div>
  );
};

export default HeroSection;
