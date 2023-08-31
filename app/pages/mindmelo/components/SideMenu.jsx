import React, { useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  AiFillHome,
  AiFillGithub,
  AiFillClockCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
const SideMenu = (props) => {
  const {
    setAboutModal,
    setTodoModalActive,
    todoModalActive,
    aboutModal,
    modalActive,
    setModalActive,
    focusActive,
    setFocusActive,
  } = props;

  return (
    <div className="MindMeloWebapp-sidemenu">
      {/* pomodoro-btn */}
      <button
        alt="pomodoro-btn"
        className={focusActive ? "sidemenu-btn btn active" : "sidemenu-btn btn"}
        onClick={() => {
          setFocusActive(!focusActive);
        }}
      >
        <span className="sidemenu-btn-name">Pomodoro</span>
        <AiFillClockCircle className="sidemenu-btn-icon" />
        <span className="sidemenu-btn-name-mobile">Pomodoro</span>
      </button>
      {/* Todo-btn */}
      <button
        alt="todo-btn"
        className={
          todoModalActive ? "sidemenu-btn btn active" : "sidemenu-btn btn"
        }
        onClick={() => {
          setTodoModalActive(!todoModalActive);
          setAboutModal(false);
          setModalActive(false);
        }}
      >
        <span className="sidemenu-btn-name">ToDo</span>
        <BsListCheck className="sidemenu-btn-icon" />
        <span className="sidemenu-btn-name-mobile">Todo</span>
      </button>
      {/* About-mindmelo */}
      <button
        alt="about-mindmelo-btn"
        className={aboutModal ? "sidemenu-btn btn active" : "sidemenu-btn btn"}
        onClick={() => {
          setTodoModalActive(false);
          setAboutModal(!aboutModal);
          setModalActive(false);
        }}
      >
        <span className="sidemenu-btn-name">About MindMelo</span>
        <AiFillInfoCircle className="sidemenu-btn-icon" />
        <span className="sidemenu-btn-name-mobile">About</span>
      </button>
      {/* Support MindMelo */}
      <a href={"https://www.buymeacoffee.com/sidtalesara"} target="_blank">
        <button alt="support-mindmelo-btn" className="sidemenu-btn btn">
          <span className="sidemenu-btn-name">Support MindMelo</span>
          <BiCoffeeTogo className="sidemenu-btn-icon" />
          <span className="sidemenu-btn-name-mobile">Support</span>
        </button>
      </a>
      {/* Github Mindmelo */}
      <a
        href={"https://github.com/sid-talesara/MindMelo/"}
        target="_blank"
        className="hide"
      >
        <button alt="mindmelo-github-btn" className="sidemenu-btn btn ">
          <span className="sidemenu-btn-name">Star on Github</span>
          <AiFillGithub className="sidemenu-btn-icon" />
          <span className="sidemenu-btn-name-mobile">Github</span>
        </button>
      </a>
      {/* Home MindMelo */}
      <Link href={"/"}>
        <button alt="mindmelo-home-btn" className="sidemenu-btn btn">
          <span className="sidemenu-btn-name">Home</span>
          <AiFillHome className="sidemenu-btn-icon" />
          <span className="sidemenu-btn-name-mobile">Home</span>
        </button>
      </Link>
      {/* tally form widget */}
      <Script async src="https://tally.so/widgets/embed.js"></Script>
    </div>
  );
};

export default SideMenu;
