import React from "react";
import Image from "next/image";

const StudentFeedback = () => {
  return (
    <div>
      <div className="bg-gradient-to-l to-[#FF8CF1] from-[#992FFF] px-8 py-8 gap-16 flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center w-3/4 gap-8">
          <section className=" flex justify-center items-center w-full">
            <div className="flex flex-col justify-between lg:justify-start items-center lg:items-start w-full">
              <p className="text-5xl font-semibold py-4">Student Feedback</p>
              <p className="text-xl">
                Various versions have evolved over the years, sometimes by
                accident.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="relative flex justify-start items-start flex-col bg-white text-black border shadow-md rounded-2xl p-4">
              <div className="flex justify-between items-center gap-8 w-full">
                <div>
                  <Image
                    src={"/images/home/student-feedback-1.png"}
                    alt=""
                    height={500}
                    width={500}
                    className="object-contain w-32"
                  />
                </div>
                <div className="absolute top-4 right-4 ">
                  <div className="w-10">
                    <Image
                      src={"/images/home/content.png"}
                      alt=""
                      height={100}
                      width={100}
                      className="object-contain w-10"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold">Janvi Gupta </p>
              </div>
              <div className="w-28">
                <img src="/images/home/star.png" alt="" />
              </div>
              <div>
                <p className="py-2">
                  My Experience : Got To Know About Trading Vividly And
                  Understand The Concepts Deeply, Learnt How To Apply Various
                  Factors, How To Analyze The Graphs, Basically How To NOT Fuck
                  My Money, How To Stop My Greed And How To Be Happy In Small
                  (Valid) Profitstand Never Thought The Classes Are Gonna So
                  Much Fun So In All It Was An Amazing Experience And Thank You
                  So Much For This
                </p>
              </div>
            </div>
            <div className="relative flex justify-start items-start flex-col bg-white text-black border shadow-md rounded-md p-4">
              <div className="w-full">
                <Image
                  src={"/images/home/student-feedback-2.png"}
                  alt=""
                  height={500}
                  width={500}
                  className="object-contain w-32"
                />
              </div>
              <div className="absolute top-4 right-4 ">
                <div className="w-10">
                  <Image
                    src={"/images/home/content.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="object-contain w-10"
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold">Rajat Mishra </p>
              </div>
              <div className="w-28">
                <img src="/images/home/star.png" alt="" />
              </div>
              <div>
                <p className="py-2">
                  My Experience : Got To Know About Trading Vividly And
                  Understand The Concepts Deeply, Learnt How To Apply Various
                  Factors, How To Analyze The Graphs, Basically How To NOT Fuck
                  My Money, How To Stop My Greed And How To Be Happy In Small
                  (Valid) Profitstand Never Thought The Classes Are Gonna So
                  Much Fun So In All It Was An Amazing Experience And Thank You
                  So Much For This
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="flex justify-center items-center">
        <div className="container px-4 lg:px-20 ">
          <div className="flex flex-col justify-between items-start">
          <div className=" flex justify-center items-start py-20 gap-4 w-full">
            <div className="w-80 lg:w-1/3">
              <Image
                src={"/images/home/join-world.png"}
                alt=""
                height={400}
                width={500}
                quality={100}
                className="object-contain w-full"
              />
            </div>

            <section className="px-8 py-4">
              <div className="px-8 py-4 ">
                <div className="">
                  <p className="text-5xl font-semibold">
                    <span className="text-fuchsia-500">Join</span> World&apos;s{" "}
                    <br />
                    largest learning <br /> platform today
                  </p>
                </div>

                <p className="text-2xl py-8">
                  Start learning by registering for free
                </p>

                <section className="w-full py-8">
                  <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white rounded-full border px-14 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                    <button className="font-bold">Sign Up for Free</button>
                  </div>
                </section>
              </div>
            </section>
          </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default StudentFeedback;
