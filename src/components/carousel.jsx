import React from "react";
import { Carousel } from "react-bootstrap";
import { ReactComponent as CRSVG } from "./crypto.svg";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          className={`${this.props.dark ? "bg-dark" : "bg-light"} px-3`}
          variant={this.props.dark ? "light" : "dark"}
        >
          <Carousel.Item className="slide">
            <CRSVG className="img-fluid mx-auto d-block" />

            <Carousel.Caption>
              <h2 className={this.props.dark ? "text-white" : "text-dark"}>
                Hello world
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <CRSVG className="img-fluid mx-auto d-block" />

            <Carousel.Caption>
              <h2 className={this.props.dark ? "text-white" : "text-dark"}>
                Hello world
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <CRSVG className="img-fluid mx-auto d-block" />
            <Carousel.Caption>
              <h2 className={this.props.dark ? "text-white" : "text-dark"}>
                Hello world
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
