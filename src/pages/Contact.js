import React from "react";
import { FiMail, FiInstagram, FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

function Contact(props) {
  const today = new Date();
  const mos = today.getMonth() - 2;
  const yrs = mos > 0 ? today.getFullYear() - 1995 : today.getFullYear() - 1996;
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
                  <br />a {yrs}-year-old Front-end Engineer from Taipe, Taiwan
                </h3>
                <p>
                  I'm specialised in front-end. React is the first framework I
                  learned at first, in combination with redux, SCSS and
                  react-router.
                  <br />
                  After entering Deloitte, I began to learn another popular
                  framework, Vue, and used it in my works.
                  <br />
                  I'm keeping learing new technology or back-end knowledge
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
