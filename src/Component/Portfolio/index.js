import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";

function Portfolio() {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    axios
      .get("https://portfolio-natasha-backend.herokuapp.com/portfolio")
      .then((res) => setProjects(res.data));
  }, [setProjects]);
  return (
    <>
      <div className="mega-card-portfolio">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <div className="individual-card">
              <h1>{project.name}</h1>
              <img
                className="img-proyecto"
                alt="img-proyecto"
                src={project.image}
              ></img>
              <p>{project.descripcion}</p>
              <a className="boton-visitar" href={project.link}>
                Visitar Proyecto
              </a>
            </div>
          ))}
      </div>
    </>
  );
}

export default Portfolio;
