import React, { useState } from "react";
import { ContactWrapper, Element } from "./ContactElements";

function Contact() {
  const [copiedText, setCopiedText] = useState("");
  const copyMessage = "copied!";
  const clickMessage = "click to copy";

  const isCopied = (text) => {
    return (text === copiedText)
  }

  const copy = (text) => {
    if (!isCopied(text)) {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
    }
  };

  return (
    <ContactWrapper id="contact">
      <div className="container">
        <div className="section-title">Contact Me</div>
          <h1>I would love to talk!</h1>
          <Element>
            <span onClick={() => copy("sydneydtran@gmail.com")}>
              sydneydtran@gmail.com
              <p>{isCopied("sydneydtran@gmail.com") && copyMessage}</p>
              <p>{!isCopied("sydneydtran@gmail.com") && clickMessage}</p>
            </span>
            <a
              className="btn light-btn"
              href="mailto:sydneydtran@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </a>
          </Element>
          <Element>
            <span onClick={() => copy("linkedin.com/in/sydneydtran")}>
              linkedin.com/in/sydneydtran
              <p>{isCopied("linkedin.com/in/sydneydtran") && copyMessage}</p>
              <p>{!isCopied("linkedin.com/in/sydneydtran") && clickMessage}</p>
            </span>
            <a
              className="btn light-btn"
              href="https://www.linkedin.com/in/sydneydtran/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open LinkedIn
            </a>
          </Element>
          <Element>
            <span onClick={() => copy("github.com/sydney-tran")}>
              github.com/sydney-tran
              <p>{isCopied("github.com/sydney-tran") && copyMessage}</p>
              <p>{!isCopied("github.com/sydney-tran") && clickMessage}</p>
            </span>
            <a
              className="btn light-btn"
              href="https://github.com/sydney-tran"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open GitHub
            </a>
          </Element>
          <Element>
            <span onClick={() => copy("instagram.com/sydney._.tran")}>
              instagram.com/sydney._.tran
              <p>{isCopied("instagram.com/sydney._.tran") && copyMessage}</p>
              <p>{!isCopied("instagram.com/sydney._.tran") && clickMessage}</p>
            </span>
            <a
              className="btn light-btn"
              href="https://www.instagram.com/sydney._.tran/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Instagram
            </a>
          </Element>
      </div>
    </ContactWrapper>
  )
};

export default Contact;
