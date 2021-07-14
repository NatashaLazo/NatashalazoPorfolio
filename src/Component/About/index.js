import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";

function About() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://portfolio-natasha-backend.herokuapp.com/about")
      .then((res) => setInformation(res.data[0]));
  }, [setInformation]);

  return (
    <div className="About">
      <div className="img-container">
        <img
          className="img-perfil"
          alt="imgperfil"
          src={information.photo}
        ></img>
      </div>
      <div className="descripcion">
        <h1>{information.name}</h1>
        <h2>{information.profession}</h2>
        <p>{information.about_me}</p>
        <ul className="skilss">
          {information.skills &&
            information.skills.map((skill, index) => (
              <p className="skill">{skill}</p>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
