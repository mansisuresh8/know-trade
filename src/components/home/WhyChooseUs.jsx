import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <div>
          <p>WHY CHOOSE US?</p>
          <p>
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-20">
        <div className="w-full">
          <Image
            src={"/images/home/why-choose-us-1.png"}
            alt=""
            height={500}
            width={200}
            className="object-contain w-full"
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
  );
};

export default WhyChooseUs;
