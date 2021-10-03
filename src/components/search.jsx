import React from "react";
import { ReactComponent as Search } from "./SearchSVG.svg";
import { ReactComponent as QA } from "./Question.svg";
import { Container } from "react-bootstrap";
import Nomics from "nomics";
import CryptoCard from "./cardgroup";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKey: "", searchDataState: [] };
  }
  handleSearch = (e) => {
    e.preventDefault();
    let nomics = new Nomics({
      apiKey: "b4296df30337df92ae975da1fd09558fe668aef8",
    });
    const getSearchData = async () => {
      let searchData = await nomics.currenciesTicker({
        ids: [this.state.searchKey],
        interval: ["1d"],
      });
      this.setState({ searchDataState: searchData });
      console.log(searchData);
      console.log(this.state.searchDataState[0].id);
    };
    getSearchData();
  };

  render() {
    return (
      <div id="#search" className="container p-4">
        <h1
          className={`${
            this.props.dark ? "text-white" : "text-dark"
          } text-center`}
        >
          Search
        </h1>
        <p
          className={`${
            this.props.dark ? "text-white" : "text-dark"
          } text-center`}
        >
          enter{" "}
          <a
            href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            token
          </a>{" "}
          and hit go/enter{" "}
        </p>
        <hr />
        <form
          onSubmit={(e) => {
            if (this.searchKey !== "") {
              this.handleSearch(e);
            }
          }}
        >
          <input
            type="text"
            placeholder=" BNB,ATOM,QNT...."
            className="form-control"
            value={this.state.searchKey}
            onChange={(e) => {
              this.setState({ searchKey: e.target.value.toUpperCase() });
            }}
          />
        </form>
        <div className="p-5">
          {/*output starts here*/}
          {this.state.searchDataState.length === 0 &&
          this.state.searchKey === "" ? (
            <Search className="img-fluid m-2 my-5 mx-auto d-block" />
          ) : this.state.searchDataState.length !== 0 &&
            this.state.searchKey !== "" ? (
            <CryptoCard
              key={this.state.searchDataState[0].rank}
              title={this.state.searchDataState[0].name}
              price={this.state.searchDataState[0].price}
              volume={this.state.searchDataState[0].volume}
              token={this.state.searchDataState[0].id}
              high={this.state.searchDataState[0].high}
              marketCap={this.state.searchDataState[0].market_cap}
              src={this.state.searchDataState[0].logo_url}
              dark={this.props.dark}
              rank={this.state.searchDataState[0].rank}
            />
          ) : this.state.searchDataState.length === 0 &&
            this.state.searchKey !== "" ? (
            <Container className="w-100 flex-box">
              <div className="">
                <QA className="img-fluid"/>
                <h2>Done ? Are you sure..</h2>
                <p>
                  If yes, hit go.
                  <br />
                  Else Try: Checking the ticker here{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tickers
                  </a>
                  .
                </p>
              </div>
            </Container>
          ) : null}
          {/*output stops here*/}
        </div>
      </div>
    );
  }
}

export default SearchBar;
