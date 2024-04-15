import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container px-4 lg:px-20 ">
        <div className="flex justify-center items-center py-20 gap-4">
          <div className="w-full">
            <Image
              src={"/images/home/about-1.png"}
              alt=""
              height={500}
              width={200}
              className="object-contain w-full"
            />
          </div>

          <section className="px-8 py-4">
            <div className="px-8 py-4">
              <div className="text-5xl font-semibold">
                <p className="">
                  ABOUT <span className="text-[#992FFF]">KNOWTRADE</span>
                </p>
              </div>

              <p className="text-lg py-6">
                We At KNOWTRADE Aim To Help Traders Around The World To Reach
                Their Trading Potential In Global Markets. Over The Past 3
                Years, We Have Mentored More Than +500 Students To Help Them
                Become Profitable Traders Across The Markets.
              </p>

              <p className="text-lg">
                We help you get the potential to generate financial returns on
                both rising and falling prices across forex, indices,
                commodities, shares, oil, metals, and cryptocurrencies. Whether
                you’re an experienced trader or competely new to it, we’re here
                to help you find freedom in the financial markets.
              </p>

              <section className="w-full py-8">
                <div className="bg-[#FF8CF1] text-white rounded-full border px-14 py-4 w-52 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                  <button className="font-bold">Know More</button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
