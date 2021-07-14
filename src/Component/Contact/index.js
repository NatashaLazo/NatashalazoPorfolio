import React from "react";
import "./style.scss";

function Contact() {
  return (
    <div className="contacto-container">
      <div className="mails-container">
        <h2>CONTACTO</h2>
        <div className="gmail-container">
          <img
            width="40px"
            height="40px"
            className="img-gmail"
            src="https://i.postimg.cc/y8JWWqQz/gmail.png"
            alt="logo-gmail"
          ></img>
          <p className="text-gmail">natashalazomonges@gmail.com</p>
        </div>
        <div className="linkedin-container">
          <img
            width="40px"
            height="40px"
            alt="logo-linkedin"
            className="img-linkedin"
            src="https://i.postimg.cc/8zRSM0GN/linkedin.png"
          ></img>
          <a
            className="text-linkedin"
            href="https://www.linkedin.com/in/natasha-lazo/"
          >
            linkedin.com/in/natasha-lazo/
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
