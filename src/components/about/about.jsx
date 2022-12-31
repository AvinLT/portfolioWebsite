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
            Welcome to my portfolio website! Being able to make a big impact in
            everything that I do has always been a core motivator and as an
            aspiring software developer I love diving deep into new technologies
            and experiences! So, no matter how hard the challenge, I’ll give it
            a crack!
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
