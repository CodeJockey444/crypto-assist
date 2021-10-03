import React from "react";
import {  Card, Container } from "react-bootstrap";

class CryptoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className={`${this.props.dark ? "dark-card" : "card"} m-1 p-3`}>
        <Card.Img
          variant="top"
          src={this.props.src}
          className="logo mx-auto d-block my-2"
        />
        <div className={`${this.props.dark ? "text-white" : "text-dark"}`}>
          <Card.Title className="h3 spl-text text-center">
            {this.props.title}
          </Card.Title>
          <Card.Body>
            <Container id="primary">
              <p>Status (in $ USD)...</p>
              <hr />
              <p>Token : {this.props.token}</p>
              <p>Rank : {this.props.rank}</p>
              <p>
                Price : {String(Math.round(Number.parseInt(this.props.price)))}{" "}
                <br />{" "}
              </p>
              <p>
                High : {String(Math.round(Number.parseInt(this.props.high)))}
              </p>
              <p>Market Cap : <br /> {this.props.marketCap}</p>
            </Container>
          </Card.Body>
        </div>
      </Card>
    );
  }
}

export default CryptoCard;
