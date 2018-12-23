import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 3 }]
  };

  handleDelete = counterId => {
    const counters = [...this.state.counters].filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    // Need to reset each value to 0
    const counters = [...this.state.counters].map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
    console.log("Clicked Reset" + counters);
  };

  handleClick = counterId => {
    const counters = [...this.state.counters];
    counters[counterId - 1].value += 1;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          type="button"
          className="btn btn-warning m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            onClick={this.handleClick}
            id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
