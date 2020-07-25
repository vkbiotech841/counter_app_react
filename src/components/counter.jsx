import React, { Component } from "react";


class Counter extends Component {

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };



  render() {
    console.log('props', this.props);
    return (
      <React.Fragment>
        {this.props.children}

        <span
          style={this.styles}
          className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          style={{ width: 100 }}
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncreament(this.props.counter)}>
          Increament
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>

      </React.Fragment>
    );
  };



  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  };

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  };

}

export default Counter;
