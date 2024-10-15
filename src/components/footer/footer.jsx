import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/avin-lanson-tharakan-5324511b4/"
          target="blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AvinLT?tab=overview&from=2021-01-01&to=2021-01-09"
          target="blank"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
