import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/amima.PNG";
import IMG2 from "../../assets/chess.PNG";
import IMG3 from "../../assets/crud.png";
import IMG4 from "../../assets/conway.PNG";
import IMG5 from "../../assets/mario.PNG";
import IMG6 from "../../assets/portfolio.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Full Stack Dev at University Start-Up AMIMA",
  },
  {
    id: 2,
    image: IMG2,
    github: "https://github.com/AvinLT/Chess_PyGame",
    title: "Chess",
  },
  {
    id: 3,
    image: IMG3,
    github: "https://github.com/AvinLT/simpleCrudApp",
    title: "Employee Management Application",
  },
  {
    id: 4,
    image: IMG4,
    github: "https://github.com/AvinLT/ConwaysGameOfLife",
    title: "Conway's Game of Life",
  },
  {
    id: 5,
    image: IMG5,
    github: "https://github.com/AvinLT/Mario_PyGame",
    title: "Super Mario Snippet Game",
  },
  {
    id: 6,
    image: IMG6,
    github: "https://github.com/AvinLT/portfolioWebsite",
    title: "This Website",
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
                <a href={github} target="blank">
                  <img src={image} alt={title} />
                </a>
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
