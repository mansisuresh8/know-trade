import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="px-20 py-8">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <div className="w-32">
            <Image
              src={"/images/header/header-logo.png"}
              height={50}
              width={200}
              className="object-contain w-full"
            />
          </div>
        </Link>
        <div className="hidden lg:flex justify-center items-center gap-6 text-xl">
          <p>About</p>
          <p>Courses</p>
          <p>Contact Us</p>
        </div>
        <section className="hidden lg:block">
        <div className="bg-[#FF9426] text-white rounded-full border border-orange-6 px-4 py-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <button className="font-bold">Order Now</button>
        </div>
      </section>
      </div>
   
    </section>
  );
};

export default Header;
