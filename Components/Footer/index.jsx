import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-attribution">
          Made with ❤️ by&nbsp;
          <a
            href="http://twitter.com/sidtalesara"
            target="_blank"
            rel="noopener noreferrer"
          >
            SidTalesara
          </a>
        </p>
        <p className="footer-text">
          © {new Date().getFullYear()} MindMelo. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
