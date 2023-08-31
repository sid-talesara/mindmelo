"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { data } from "../Data/landingData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const InfoCard = () => {
  return (
    <div className="infocard-wrapper">
      {data.map((cardData) => (
        <AnimatedCard key={cardData.id} cardData={cardData} />
      ))}
    </div>
  );
};

const AnimatedCard = ({ cardData }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  // animations
  const infoCardVariant = {
    hidden: { y: 50, opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: { duration: 0.4 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={infoCardVariant}
      initial={controls}
      animate={controls}
    >
      <div
        className="infocard"
        style={
          cardData.rowReverse
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        <div className="infocard-img-wrapper">
          <Image
            src={cardData.img}
            alt={cardData.altText}
            width={160}
            height={160}
            quality={100}
            className="infocard--img"
          />
        </div>
        <div className="infocard-details">
          <h3 className="infocard-details--heading">{cardData.heading}</h3>
          <p className="infocard-details--desc">{cardData.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
