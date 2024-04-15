import React from "react";
import Image from "next/image";

const CoursesSection = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r to-[#FF8CF1] from-[#992FFF] w-full">
      <div className="container px-4 lg:px-20 ">
        <div className="flex justify-center lg:justify-between items-center py-20 gap-4 lg:gap-16">
          <div className="w-full lg:w-1/3">
            <p>Our popular Courses</p>
            <p>
              A course providing advance knowledge to students making them
              profitable independent traders. Learn what it takes to become a
              profitable trader. With hours of extensive training & mentorship,
              we help you navigate you through the steps of your journey to
              financial freedom.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-3 ">
              <div className="bg-white text-black rounded-lg px-4 py-6 ">
                <div className="w-full">
                  <Image
                    src={"/images/home/courses-section-1.png"}
                    alt=""
                    height={500}
                    width={500}
                    className="object-contain w-full"
                  />
                </div>
                <div>
                  <div>
                    <p>Trading 101</p>
                    <p>( Beginner )</p>
                  </div>
                  <div>
                    <div>
                      <img src="" alt="" />
                      <p>(15)</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p></p>
                    </div>
                    <div>
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
