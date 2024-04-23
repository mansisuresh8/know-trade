import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-20 ">
        <div className="flex flex-col justify-center items-center py-20 gap-4">
          <div className="flex justify-center items-center py-20">
            <div>
              <p className="text-5xl font-semibold text-center py-4">
                WHY <span className=" text-[#992FFF]">CHOOSE US?</span>
              </p>
              <p className="text-xl">
                Various versions have evolved over the years, sometimes by
                accident,
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="w-full">
              <Image
                src={"/images/home/why-choose-us-1.png"}
                alt=""
                height={500}
                width={500}
                className="object-cover w-full rounded-xl"
              />
            </div>

            <div className="w-full">
              <Image
                src={"/images/home/why-choose-us-2.png"}
                alt=""
                height={500}
                width={200}
                className="object-contain w-full"
              />
            </div>

            <div className="w-full">
              <Image
                src={"/images/home/why-choose-us-3.png"}
                alt=""
                height={500}
                width={200}
                className="object-contain w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
