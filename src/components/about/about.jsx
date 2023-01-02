import React from "react";
import "./about.css";
import ME from "../../assets/avin.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>McMaster University</h5>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h3>3rd Year</h3>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h3>3.7 GPA</h3>
            </article>
          </div>
          <p>
            Welcome to my portfolio website! As an aspiring software developer,
            I love experimenting with new technologies and experiences. By
            approaching projects with enthusiasm, determination, and ingenuity,
            I contribute significantly to everything I am a part of. No matter
            how hard the challenge, I’ll give it a crack!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
