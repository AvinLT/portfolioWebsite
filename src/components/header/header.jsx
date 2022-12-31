import React from "react";
import HeadBtn from "./headBtn";
import ME from "../../assets/avin.jpg";
import Socials from "./socials.jsx";
import "./header.css";

const header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Avin Lanson</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeadBtn />
        <Socials></Socials>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
