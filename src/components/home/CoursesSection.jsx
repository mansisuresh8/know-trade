import React from "react";
import Image from "next/image";

const CoursesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-r to-[#FF8CF1] from-[#992FFF] w-full">
      <div className="flex flex-col justify-center items-center container px-4 lg:px-20 ">
        <div className="flex justify-center lg:justify-between items-center py-20 gap-4 lg:gap-16">
          <div className="w-full lg:w-1/3">
            <p className="text-5xl font-bold">Our popular Courses</p>
            <p className="text-xl py-8">
              A course providing advance knowledge to students making them
              profitable independent traders. Learn what it takes to become a
              profitable trader. With hours of extensive training & mentorship,
              we help you navigate you through the steps of your journey to
              financial freedom.
            </p>
            <section className="w-full py-8">
              <div className="bg-black text-white rounded-full border px-8 py-4 w-1/2  text-center  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="font-bold">Explore All</button>
              </div>
            </section>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-3 gap-8 w-full">
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
                  <div className="flex flex-col justify-between items-start py-4">
                    <p className="text-[#6A25C5] text-xl">Trading 101</p>
                    <p>( Beginner )</p>
                  </div>
                  <div className="flex justify-start  items-start">
                    <div className="w-32">
                      <img src="/images/home/star.png" alt="" />
                    </div>
                    <p className="px-2">(15)</p>
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center ">
                      <p className="text-xl text-red-600 font-bold">₹6,999/-</p>
                      <section className="w-full px-20">
                        <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white rounded-full border text-center py-2 w-20  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                          <button className="font-bold">Buy</button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-6 ">
                <div className="w-full">
                  <Image
                    src={"/images/home/courses-section-3.png"}
                    alt=""
                    height={500}
                    width={500}
                    className="object-contain w-full"
                  />
                </div>
                <div>
                  <div className="flex flex-col justify-between items-start py-4">
                    <p className="text-[#6A25C5] text-xl">Trading 101</p>
                    <p>( Beginner )</p>
                  </div>
                  <div className="flex justify-start  items-start">
                    <div className="w-32">
                      <img src="/images/home/star.png" alt="" />
                    </div>
                    <p className="px-2">(15)</p>
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center ">
                      <p className="text-xl text-red-600 font-bold">₹6,999/-</p>
                      <section className="w-full px-20">
                        <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white rounded-full border text-center py-2 w-20  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                          <button className="font-bold">Buy</button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-6 ">
                <div className="w-full">
                  <Image
                    src={"/images/home/courses-section-3.png"}
                    alt=""
                    height={500}
                    width={500}
                    className="object-contain w-full"
                  />
                </div>
                <div>
                  <div className="flex flex-col justify-between items-start py-4">
                    <p className="text-[#6A25C5] text-xl">Trading 101</p>
                    <p>( Beginner )</p>
                  </div>
                  <div className="flex justify-start  items-start">
                    <div className="w-32">
                      <img src="/images/home/star.png" alt="" />
                    </div>
                    <p className="px-2">(15)</p>
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center ">
                      <p className="text-xl text-red-600 font-bold">₹6,999/-</p>
                      <section className="w-full px-20">
                        <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white rounded-full border text-center py-2 w-20  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                          <button className="font-bold">Buy</button>
                        </div>
                      </section>
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
