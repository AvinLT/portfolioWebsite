import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/amima.PNG";
import IMG2 from "../../assets/chess.PNG";
import IMG3 from "../../assets/crud.png";
import IMG4 from "../../assets/mario.PNG";
import IMG5 from "../../assets/portfolio.PNG";
import IMG6 from "../../assets/conway.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Full Stack Dev at University Start-Up AMIMA",
  },
  {
    id: 2,
    image: IMG2,
    title: "Chess",
  },
  {
    id: 3,
    image: IMG3,
    title: "Employee Management Application",
  },
  {
    id: 4,
    image: IMG4,
    title: "Super Mario Snippet Game",
  },
  {
    id: 5,
    image: IMG5,
    title: "This Website",
  },
  {
    id: 6,
    image: IMG6,
    title: "Conway's Game of Life",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
