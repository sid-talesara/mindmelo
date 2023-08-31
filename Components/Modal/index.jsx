import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
const Modal = ({ children, setModelActive }) => {
  // animations
  const musicInfoModel = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 250,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.3, ease: "easeInOut" },
      y: 0,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal"
        variants={musicInfoModel}
        initial="hidden"
        animate="visible"
        className="modal-wrapper"
      >
        <button
          alt="Model-close-btn"
          className="close-modal--btn btn"
          onClick={() => setModelActive(false)}
        >
          <AiOutlineCloseCircle />
        </button>
        <div className="modal">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
