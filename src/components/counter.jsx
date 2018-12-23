import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.props.value}
          <button
            onClick={() => this.props.onClick(this.props.id)}
            type="button"
            className="btn btn-success m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.id)}
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
