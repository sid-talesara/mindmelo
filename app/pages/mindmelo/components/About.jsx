import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiBento } from "react-icons/si";

import Modal from "@/Components/Modal";

const About = ({ setAboutModal }) => {
  return (
    <Modal setModelActive={setAboutModal}>
      {/* about */}
      <>
        <h3 className="about-title">About MindMelo:</h3>
        <p className="about-desc">
          Music plays an integral part in one's life. People have different
          memories associated with different types of music. Music also helps us
          to calm down, relax, and can even increase our productivity. So,
          welcome to MindMelo, your source for enhanced focus and tranquility.
          Immerse yourself in our thoughtfully curated selection of
          nature-inspired sounds, designed to elevate your work, study,
          relaxation, and sleep experiences. With integrated tools like to-do
          lists and Pomodoro timers, we've created a platform that empowers your
          productivity and well-being.
        </p>
      </>
      {/* Meet the creator */}
      <>
        <h3 className="about-title"> Meet the Creator:</h3>
        <p className="about-desc">
          Hi I am Siddharth creator of MindMelo and a passionate web developer
          and designer who loves to turn ideas into reality. Apart from that I
          also like gardening 🪴 Connect with me through these channels for
          updates and insights:
          <div>
            <a
              href="https://twitter.com/sidtalesara?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="false"
            >
              <button alt="Twitter-follow-btn" className="social--btn btn">
                {" "}
                <AiOutlineTwitter />
                &nbsp;Follow @sidtalesara
              </button>
            </a>

            <a
              href="https://bento.me/sidtalesara"
              class="twitter-follow-button"
              //   data-show-count="false"
            >
              <button alt="Portfolio" className="social--btn btn">
                <SiBento /> Let's Connect
              </button>
            </a>
          </div>
        </p>
      </>
      {/* your thoughts */}
      <>
        <h3 className="about-title"> Your Thoughts:</h3>{" "}
        <p className="about-desc">
          Help us shape MindMelo! Your feedback matters. Let us know how we can
          improve: [Provide Feedback] (insert-feedback-button-link). Your input
          guides our progress.
        </p>
        <a
          href="https://twitter.com/sidtalesara?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          <button
            alt="feedback-form-btn"
            className="social--btn feedback--btn btn"
            data-tally-open="w8aRWl"
            data-tally-layout="modal"
            data-tally-align-left="1"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="0"
          >
            {" "}
            👋 Share Your Thoughts
          </button>
        </a>
      </>
    </Modal>
  );
};

export default About;
