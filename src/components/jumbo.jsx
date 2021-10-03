import React from "react";
import { Container } from "react-bootstrap";

class Jumbo extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={`slide p-5  ${
          this.props.dark ? `bg-dark text-white ` : `bg-light text-dark `
        }`}
      >
        <h1 className="spl-text text-center">{this.props.title}</h1>
        <hr />
        <p>{this.props.des}</p>
        <p>{this.props.des2}</p>
      </Container>
    );
  }
}

export default Jumbo;
