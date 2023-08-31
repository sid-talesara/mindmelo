import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo-light-without-text.png";
const TryForFree = ({ childrenVariant }) => {
  return (
    <Link href={"/pages/mindmelo"}>
      <motion.button
        className=" btn try-for-free--btn"
        variants={childrenVariant}
      >
        <Image
          src={logo}
          alt={"MindMelo Logo"}
          width={40}
          height={40}
          quality={100}
          className="logo-on-btn-try-for-free"
        />{" "}
        Try For Free!
      </motion.button>
    </Link>
  );
};

export default TryForFree;
