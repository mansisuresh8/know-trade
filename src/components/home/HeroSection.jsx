import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href={"/"}>
            <div className="w-full">
              <Image
                src={"/images/home/hero-section-2.png"}
                height={500}
                width={500}
                className="object-contain w-full"
              />
            </div>
          </Link>{" "}
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

      {/* About */}
      <section>
        <div className="flex justify-center items-center px-20 py-20 gap-4">
          <Link href={"/"}>
            <div className="w-full">
              <Image
                src={"/images/home/about-1.png"}
                height={500}
                width={200}
                className="object-contain w-full"
              />
            </div>
          </Link>
          <div className="">
            <p>ABOUT KNOWTRADE</p>
            <p>
              We At KNOWTRADE Aim To Help Traders Around The World To Reach
              Their Trading Potential In Global Markets. Over The Past 3 Years,
              We Have Mentored More Than +500 Students To Help Them Become
              Profitable Traders Across The Markets.
            </p>
            <p>
              We help you get the potential to generate financial returns on
              both rising and falling prices across forex, indices, commodities,
              shares, oil, metals, and cryptocurrencies. Whether you’re an
              experienced trader or competely new to it, we’re here to help you
              find freedom in the financial markets.
            </p>
            <div className="bg-[#FF8CF1] text-white rounded-full border px-4 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <button className="font-bold">Know More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses  */}
      <section className="bg-[#FF8CF1] px-8 py-8 flex justify-between items-center">
        <div>
          <p>Our popular Courses</p>
          <p>
            A course providing advance knowledge to students making them
            profitable independent traders. Learn what it takes to become a
            profitable trader. With hours of extensive training & mentorship, we
            help you navigate you through the steps of your journey to financial
            freedom.
          </p>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
