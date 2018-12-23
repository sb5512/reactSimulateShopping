import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value };

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>
          {this.state.value}
          <button
            onClick={() => this.handleClick()}
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
