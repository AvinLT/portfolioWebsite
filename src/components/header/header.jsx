import React from "react";
import HeadBtn from "./headBtn";
import ME from "../../assets/avin2.jpg";
import Socials from "./socials.jsx";
import "./header.css";

const header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="intro_content">
          <h5>Hey there! I'm</h5>
          <h1>Avin Lanson Tharakan</h1>
          <h5 className="text-light">
            4th Year CS Student @ McMaster University
          </h5>
          <HeadBtn />
        </div>
        <div className="intro_me">
          <div className="intro_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
