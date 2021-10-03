import React from "react";
import { Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container className="flex-box p-4 bg-dark text-white footer" fluid>
          <a href="/">
            <i className="spl-text m-2 bi bi-facebook"></i>
          </a>
          <a href="/">
            <i className="spl-text m-2 bi bi-linkedin"></i>
          </a>
          <a href="/">
            <i className="spl-text m-2 bi bi-instagram"></i>
          </a>
          <a href="/">
            <i className="spl-text m-2 bi bi-github"></i>
          </a>
        </Container>
        <Container
          style={{ backgroundColor: "#000" }}
          className="p-3 text-white"
          fluid
        >
          <p className="text-center">
            Made with <i className="spl-text bi bi-heart-fill"></i> by Manjunath
          </p>
          <hr />
          <p className="text-center">
            &copy; All rights reserved.<a href="/">View License(MIT)</a>
          </p>
        </Container>
      </div>
    );
  }
}

export default Footer;
