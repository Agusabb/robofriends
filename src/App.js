import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredrobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Permanent+Marker"
        />
        <h1 classname="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredrobots} />
      </div>
    );
  }
}

export default App;
