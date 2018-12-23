import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Counters />
      </main>
    );
  }
}

export default App;
