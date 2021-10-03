import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class Naxbar extends Component {
  constructor(props) {
    super(props);
    this.state = { dark: false, liked: false };
  }
  handleDark = (e) => {
    e.preventDefault();
    this.setState({ dark: !this.state.dark });
    this.props.getDarkStatus(this.state.dark);
  };
  handleHeart = (e) => {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  };
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" className="p-3 mb-2">
        <Navbar.Brand className="h1 text-white title-text">
          Benjamin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="#crypto-nav"></Navbar.Toggle>
        <Navbar.Collapse id="crypto-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              <i
                className="bi  bi-heart-fill"
                style={{ color: `${this.state.liked ? "#d63636" : "#fff"}` }}
                onClick={(e) => {
                  this.handleHeart(e);
                }}
              ></i>
            </Nav.Link>
            <Nav.Link href="https://github.com/CodeJockey444/crypto-assist/blob/master/README.md">
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link href="/">
              <i
                className={
                  this.state.dark
                    ? "bi bi-cloud-sun-fill"
                    : "bi bi-cloud-moon-fill"
                }
                onClick={(e) => {
                  this.handleDark(e);
                }}
              ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Naxbar;
