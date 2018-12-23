import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          type="button"
          className="btn btn-warning m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onAddItem}
          type="button"
          className="btn btn-warning m-2"
        >
          Add item
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
