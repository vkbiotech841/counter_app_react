import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return <ui> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ui>;
    }
  };

  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("Increament Clicked", this);
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button style={{ width: 100 }} className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncreament({ id: 1 })}>
          Increament
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div>


      </React.Fragment>
    );
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  };
}

export default Counter;
