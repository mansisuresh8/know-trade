import React from "react";
import Image from "next/image";

const StudentFeedback = () => {
  return (
    <div>
      <div className="bg-[#FF8CF1] px-8 py-8 gap-16 flex flex-col justify-between items-center">
        <section className=" flex justify-start items-start">
          <div>
            <p className="text-5xl font-semibold py-4">Student Feedback</p>
            <p className="text-xl">
              Various versions have evolved over the years, sometimes by
              accident.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="flex justify-start items-start flex-col bg-white text-black border shadow-md rounded-2xl p-4">
            <div className="flex justify-between items-center gap-80">
              <div>
                <Image
                  src={"/images/home/student-feedback-1.png"}
                  alt=""
                  height={500}
                  width={500}
                  className="object-contain w-32"
                />
              </div>
              <div className="w-14">
                <img src="/images/home/content.png" alt="" />
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
                My Experience : Got To Know About Trading Vividly And Understand
                The Concepts Deeply, Learnt How To Apply Various Factors, How To
                Analyze The Graphs, Basically How To NOT Fuck My Money, How To
                Stop My Greed And How To Be Happy In Small (Valid) Profitstand
                Never Thought The Classes Are Gonna So Much Fun So In All It Was
                An Amazing Experience And Thank You So Much For This
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col bg-white text-black border shadow-md rounded-md p-4">
            <div className="w-full">
              <Image
                src={"/images/home/student-feedback-2.png"}
                alt=""
                height={500}
                width={500}
                className="object-contain w-32"
              />
            </div>
            <div>
              <p className="text-2xl font-semibold">Rajat Mishra </p>
            </div>
            <div className="w-28">
              <img src="/images/home/star.png" alt="" />
            </div>
            <div>
              <p className="py-2">
                My Experience : Got To Know About Trading Vividly And Understand
                The Concepts Deeply, Learnt How To Apply Various Factors, How To
                Analyze The Graphs, Basically How To NOT Fuck My Money, How To
                Stop My Greed And How To Be Happy In Small (Valid) Profitstand
                Never Thought The Classes Are Gonna So Much Fun So In All It Was
                An Amazing Experience And Thank You So Much For This
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="flex justify-center items-center">
        <div className="container px-4 lg:px-20 ">
          <div className="flex justify-center items-center py-20 gap-4">
            <div className="w-full">
              <Image
                src={"/images/home/join-world.png"}
                alt=""
                height={400}
                width={500}
                className="object-contain w-full"
              />
            </div>

            <section className="px-8 py-4">
              <div className="px-8 py-4">
                <div className="text-5xl font-bold">
                  <p className="">
                    Join World's largest learning platform today
                  </p>
                </div>

                <p className="text-lg py-6">
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
      </section>
    </div>
  );
};

export default StudentFeedback;
