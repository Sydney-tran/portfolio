import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { Icon } from "./IconsElements"

function Icons() {
  return (
    <Icon>
      <ul>
        <li className="item">
          <a
            href="mailto:sydneydtran@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="element"/>
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/sydneydtran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="element"/>
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/sydney-tran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="element"/>
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.instagram.com/sydney._.tran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="element"/>
          </a>
        </li>
      </ul>
    </Icon>
  );
}

export default Icons;
