import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Jumbo from "./jumbo";
import Slider from "./carousel";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeLink: "about-benjamin" };
  }
  displayDeterminant = (aLink) => {
    if (aLink === "about-benjamin") return <Slider dark={this.props.dark}/>;
    if (aLink === "about-me") {
      return (
        <Jumbo
          dark={this.props.dark}
          title={"About me"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur sunt debitis atque, at magnam rem repellat inventore dicta minus non. Perferendis minima ea accusamus quaerat deserunt voluptatum similique fuga?"
          }
          des2={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur sunt debitis atque, at magnam rem repellat inventore dicta minus non. Perferendis minima ea accusamus quaerat deserunt voluptatum similique fuga?"
          }
        />
      );
    }
    if (aLink === "dedication") {
      return (
        <Jumbo
          dark={this.props.dark}
          title={"Dedication"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur sunt debitis atque, at magnam rem repellat inventore dicta minus non. Perferendis minima ea accusamus quaerat deserunt voluptatum similique fuga?"
          }
          des2={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur sunt debitis atque, at magnam rem repellat inventore dicta minus non. Perferendis minima ea accusamus quaerat deserunt voluptatum similique fuga?"
          }
        />
      );
    }
  };
  render() {
    return (
      <div>
        <Container className="flex-box p-2 gradient-bg" fluid>
          <Button
            variant={
              this.props.dark
                ? `outline-light m-2 px-2`
                : `outline-dark m-2 px-2`
            }
            onClick={() => {
              this.setState({ activeLink: "about-benjamin" });
              console.log(`state changed:${this.state.activeLink}`);
            }}
          >
            About Benjamin
          </Button>
          <Button
            variant={
              this.props.dark
                ? `outline-light m-2 px-2`
                : `outline-dark m-2 px-2`
            }
            onClick={() => {
              this.setState({ activeLink: "dedication" });
              console.log(`state changed:${this.state.activeLink}`);
            }}
          >
            Dedication
          </Button>
          <Button
            variant={
              this.props.dark
                ? `outline-light m-2 px-2`
                : `outline-dark m-2 px-2`
            }
            onClick={() => {
              this.setState({ activeLink: "about-me" });
              console.log(`state changed:${this.state.activeLink}`);
            }}
          >
            About me
          </Button>
        </Container>
        <div>{this.displayDeterminant(this.state.activeLink)}</div>
      </div>
    );
  }
}

export default About;
