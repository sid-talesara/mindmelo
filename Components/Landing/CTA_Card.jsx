"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TryForFree from "./TryForFree";

const CTA_Card = ({ children }) => {
  // animations
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const parentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };
  const childrenVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      variants={parentVariant}
      initial={controls}
      animate={controls}
      className="cta-card"
    >
      <motion.div variants={childrenVariant} className="cta-card-contents">
        {children}
      </motion.div>
      <TryForFree childrenVariant={childrenVariant} />
    </motion.div>
  );
};

export default CTA_Card;
