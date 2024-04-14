import React from "react";
import Image from "next/image";

const MentorsSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <div>
          <p>Mentors</p>
          <p>
            Meet the mentors who will guide you throughout your entire journey.
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center px-20 py-20">
          <div className="w-full">
            <Image
              src={"/images/home/mentors-1.png"}
              alt=""
              height={500}
              width={200}
              className="object-contain w-full"
            />
          </div>

          <div>
            <p>Been trading in the Indian and Forex Market for 3+years. </p>
            <p>Trained & Mentored more than 500+ students. </p>
            <p>NSE certified Options & Equity Derivatives Trader. </p>
            <p>Successfully Handling portfolio worth $250000. </p>
            <p>
              Focussed on creating a diverse educational platform enabling
              traders from all
            </p>
            <p>
              Backgrounds to reach their potential in the financial markets.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-20 py-20">
        <div>
          <p>Been trading in the Indian and Forex Market for 3+years. </p>
          <p>Trained & Mentored more than 500+ students. </p>
          <p>NSE certified Options & Equity Derivatives Trader. </p>
          <p>Successfully Handling portfolio worth $250000. </p>
          <p>
            Focussed on creating a diverse educational platform enabling traders
            from all
          </p>
          <p>Backgrounds to reach their potential in the financial markets.</p>
        </div>
        <div className=" ">
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
    </div>
  );
};

export default MentorsSection;
