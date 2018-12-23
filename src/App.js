import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
    itemNextId: 4
  };

  handleDelete = counterId => {
    const counters = [...this.state.counters].filter(
      counter => counter.id !== counterId
    );

    counters.length === 0
      ? this.setState({ counters, itemNextId: 1 })
      : this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters].map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleAddItem = () => {
    const counters = [...this.state.counters];
    const { itemNextId } = this.state;
    counters.push({ id: itemNextId, value: 0 });
    this.setState({ counters, itemNextId: itemNextId + 1 });
  };

  render() {
    return (
      <main className="container">
        <Navbar items={this.state.counters.length} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onAddItem={this.handleAddItem}
        />
      </main>
    );
  }
}

export default App;
