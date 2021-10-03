import React from "react";
import CryptoCard from "./cardgroup";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Brand } from "./brand.svg";
import Nomics from "nomics";
// BTC , ETH , USDT , BNB , ATOM ,QNT
class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataset: [], isHome: true };
  }
  handleDataLoad = () => {
    const nomics = new Nomics({
      apiKey: "b4296df30337df92ae975da1fd09558fe668aef8",
    });
    const getData = async () => {
      let data = await nomics.currenciesTicker({
        ids: ["BTC", "ETH", "BNB", "USDT", "UNI", "WBTC"],
        interval: ["1d"],
      });
      console.log(data);
      this.setState({ dataset: data });
    };
    getData();
  };
  render() {
    return (
      //start of welcome page component

      <Container className="p-5">
        {this.state.isHome ? (
          <div>
            <h1
              className={`text-center  ${
                this.props.dark ? "text-white" : "text-dark"
              }`}
            >
              Quick market round up
            </h1>
            {/*Button group starts */}
            <div className="flex-box">
              <Button
                variant={`${this.props.dark ? "light" : "dark"}`}
                size="md"
                onClick={() => {
                  this.handleDataLoad();
                  this.setState({ isHome: false });
                }}
                className="mx-auto d-block m-2 p-2"
              >
                Today's updates
              </Button>
            </div>
            {/*Button group ends */}

            <Brand className="img-fluid mx-auto d-block m-3" />
          </div>
        ) : (
          //end of welcome page component

          //start of daily check out component
          <div>
            <h1
              className={`text-center  ${
                this.props.dark ? "text-white" : "text-dark"
              }`}
            >
              Today's trending
            </h1>
            <Button
              className="mx-auto d-block"
              variant={`${this.props.dark ? "outline-light" : "outline-dark"}`}
              onClick={() => {
                this.setState({ isHome: true });
              }}
            >
              Back to home page
            </Button>
            <hr />
            <Row>
              {this.state.dataset.map((data) => {
                return (
                  <Col sm={12} md={6} lg={4}>
                    {" "}
                    <CryptoCard
                      key={data.rank}
                      title={data.name}
                      price={data.price}
                      volume={data.volume}
                      token={data.id}
                      high={data.high}
                      marketCap={data.market_cap}
                      src={data.logo_url}
                      dark={this.props.dark}
                      rank={data.rank}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </Container>
      //end  of daily check out component
    );
  }
}

export default Status;
