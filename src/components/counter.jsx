import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.props.counter.value}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            type="button"
            className="btn btn-success m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            type="button"
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </h1>
      </React.Fragment>
    );
  }
}

export default Counter;
