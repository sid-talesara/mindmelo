import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Logo-light-without-text.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <Image
          src={logo}
          alt={"MindMelo Logo"}
          width={80}
          height={80}
          quality={100}
          className="infocard-img"
        />{" "}
      </Link>
      <Link className="brand-Name" href={"/"}>
        MindMelo
      </Link>
    </nav>
  );
};

export default Navbar;
