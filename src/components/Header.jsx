import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="px-4 lg:px-20 py-4 lg:py-8 bg-[#070A29] w-full">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <div className="w-28 lg:w-32">
            <Image
              src={"/images/header/header-logo.png"}
              height={50}
              width={200}
              className="object-contain w-full"
            />
          </div>
        </Link>
        <div className="lg:flex justify-center items-center px-8 gap-8 hidden">
          <div className="flex justify-center items-center gap-6 text-xl">
            <p>About</p>
            <p>Courses</p>
            <p>Contact Us</p>
          </div>
          <section className="hidden lg:block">
            <div className="bg-[#FF8CF1] text-white rounded-full border px-8 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <button className="font-bold">Register</button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Header;
