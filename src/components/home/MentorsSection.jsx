import React from "react";
import Image from "next/image";

const MentorsSection = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container px-4 lg:px-20 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center py-20">
            <div >
              <p className="text-5xl font-semibold text-center text-[#992FFF] py-4">Mentors</p>
              <p className="text-xl">
                Meet the mentors who will guide you throughout your entire
                journey.
              </p>
            </div>
          </div>

          <section className="flex flex-col justify-center items-center w-full gap-8">
            <div className="flex justify-between items-center w-full gap-16">
              <div className="w-1/3">
                <div className="w-full">
                  <Image
                    src={"/images/home/mentors-1.png"}
                    alt=""
                    height={500}
                    width={200}
                    className="object-contain w-full"
                  />
                </div>
              </div>

              <div className="w-2/3">
                <ul className="text-white list-disc text-2xl space-y-4">
                  <li>
                    Been trading in the Indian and Forex Market for 3+years.
                  </li>
                  <li>Trained & Mentored more than 500+ students. </li>
                  <li>NSE certified Options & Equity Derivatives Trader. </li>
                  <li>Successfully Handling portfolio worth $250000. </li>
                  <li>
                    Focussed on creating a diverse educational platform enabling
                    traders from all
                  </li>
                  <li>
                    Backgrounds to reach their potential in the financial
                    markets.
                  </li>
                </ul>
              </div>
            </div>

            
          </section>

          <section className="flex flex-col justify-center items-center w-full gap-8">
            <div className="flex justify-between items-center w-full gap-16">
             

              <div className="w-2/3">
                <ul className="text-white list-disc text-2xl space-y-4">
                  <li>
                    Been trading in the Indian and Forex Market for 3+years.
                  </li>
                  <li>Trained & Mentored more than 500+ students. </li>
                  <li>NSE certified Options & Equity Derivatives Trader. </li>
                  <li>Successfully Handling portfolio worth $250000. </li>
                  <li>
                    Focussed on creating a diverse educational platform enabling
                    traders from all
                  </li>
                  <li>
                    Backgrounds to reach their potential in the financial
                    markets.
                  </li>
                </ul>
              </div>

              <div className="w-1/3">
                <div className="w-full">
                  <Image
                    src={"/images/home/mentors-2.png"}
                    alt=""
                    height={500}
                    width={200}
                    className="object-contain w-full"
                  />
                </div>
              </div>
            </div>

            
          </section>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
