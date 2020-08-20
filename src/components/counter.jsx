import React, { Component } from "react";


class Counter extends Component {

  componentDidMount(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  };

  // React life hook: UNMOUNTING PHASE
  componentWillUnmount() {
    console.log('Counter- Unmount');
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
    width: 50,
  };


  render() {
    console.log('Counter-Rendered');
    console.log('props', this.props);
    return (
      <div>
        {this.props.children}

        <span
          style={this.styles}
          className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          style={{ width: 40 }}
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncreamentCounter(this.props.counter)}
        >
          +
        </button>

        <button
          onClick={() => this.props.onDeleteCounter(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>

      </div>
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


// Controlled component: 
// child component is controlled from the parent component. Means, child componens gets all data from the parent
// component using props. and child component raise the event. that event will be handled by the parent component.