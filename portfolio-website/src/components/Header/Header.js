import React from "react";
import { Nav, NavLink, NavMenu, ResumeBtn } from "./HeaderElements";

const Header = () => {
  return (
    <div className="container">
      <Nav>
        <NavMenu>
          <NavLink className="menu-item" to="home">
            Home
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <ResumeBtn>
          <a
            className="btn transparent-btn"
            href="https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/SydneyTranResume.pdf" //todo
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </ResumeBtn>
      </Nav>
    </div>
  );
};

export default Header;
