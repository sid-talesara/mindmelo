"use client";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

import Weather from "@/Components/utils/Weather";
import TimeAndDate from "@/Components/utils/TimeAndDate";
import Focus from "@/Components/Focus/Focus";
import ToDo from "../../../Components/ToDo/ToDo";
import About from "./components/About";
import Music from "./components/Music";
import Quote from "./components/Quote";
import SideMenu from "./components/SideMenu";

export default function Home() {
  // calculate the width of screen
  const [width, height] = useWindowSize();
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    if (width < 992) {
      setShowToast(false);
    }
  }, []);

  // fetch background of the day
  const [bgImg, setBgImg] = useState("");
  useEffect(() => {
    fetch("https://bing.biturl.top/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBgImg(data.url);
      })
      .catch((err) => {
        setBgImg(
          "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        );
        console.warn("Something went wrong.", err);
      });
  }, []);

  // hooks
  const [todoModal, setTodoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [focusActive, setFocusActive] = useState(false);

  return (
    <div
      className="Mindmelo-wrapper"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="Mindmelo-container">
        <Weather />

        {focusActive && <Focus />}

        <Music modelActive={modalActive} setModelActive={setModalActive} />

        <TimeAndDate />

        <Quote />

        {todoModal && <ToDo setTodoModal={setTodoModal} />}

        {aboutModal && <About setAboutModal={setAboutModal} />}

        <SideMenu
          setAboutModal={setAboutModal}
          aboutModal={aboutModal}
          setTodoModalActive={setTodoModal}
          todoModal={todoModal}
          setModalActive={setModalActive}
          modalActive={modalActive}
          setFocusActive={setFocusActive}
          focusActive={focusActive}
        />

        {/* backdrop */}
        {(todoModal || aboutModal) && (
          <motion.div className="backdrop"></motion.div>
        )}
      </div>

      {/* Toast Notifications */}
      {showToast && (
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </div>
  );
}
