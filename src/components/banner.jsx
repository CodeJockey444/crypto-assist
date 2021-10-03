import React from "react";
import { Navbar,Nav} from "react-bootstrap";

class NavbarComp extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="gradient-bg" expand="lg">
          <Navbar.Toggle aria-controls="#crypto-nav"></Navbar.Toggle>
          <Navbar.Collapse id="crypto-nav">
            <Nav>
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/">About</Navbar.Link>
                <Navbar.Link href="/">Contact</Navbar.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
