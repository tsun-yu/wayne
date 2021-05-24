import React from "react";
import { FiMail, FiInstagram, FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

function Contact(props) {
  return (
    <>
      <div className="contact">
        <div className="contact__profile--bg">
          <div className="contact__profile">
            <img alt="portrait" src="./images/portrait.JPG"></img>
            <div className="contact__content">
              <div className="contact__des">
                <h3>
                  I'm Wayne Huang
                  <br />a 26-year-old Front-end Engineer from Taipe, Taiwan
                </h3>
                <p>
                  I'm specialised in front-end. React is what I use most of the
                  time, in combination with redux and SCSS.
                  <br /> In the front-end field, I'll keep learing new
                  technology, back-end knowledge and other popular framework,
                  like Vue and Angular.
                  <br />I wish I can became a senior or a fullstack engineer one
                  day!
                </p>
              </div>
              <div className="contact__icons">
                <a
                  href="mailto:tsun988487@gmail.com"
                  rel="noreferrer"
                  className="contact__link"
                >
                  <FiMail size={35} color={"#333"} />
                </a>
                <a
                  href="https://www.instagram.com/tsun_yu/"
                  rel="noreferrer"
                  className="contact__link"
                  target="_blank"
                >
                  <FiInstagram size={35} color={"#333"} />
                </a>
                <a
                  href="https://github.com/tsun-yu"
                  rel="noreferrer"
                  className="contact__link"
                  target="_blank"
                >
                  <FiGithub size={35} color={"#333"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tsun-yu-wayne-huang-020268163/"
                  className="contact__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin size={35} color={"#333"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
