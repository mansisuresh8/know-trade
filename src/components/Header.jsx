import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
