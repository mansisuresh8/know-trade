import React from "react";
import Image from "next/image";

const StudentFeedback = () => {
  return (
    <div>
      <div className="bg-[#FF8CF1] px-8 py-8 flex justify-between items-center">
        <div>
          <p>Student Feedback</p>
          <p>
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p></p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center px-20 py-20">
          <div className="w-full">
            <Image
              src={"/images/home/join-world.png"}
              alt=""
              height={500}
              width={200}
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className="px-40">
          <p>Join World's largest learning platform today</p>
          <p>Start learning by registering for free</p>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
