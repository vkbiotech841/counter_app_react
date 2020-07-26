import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';


// Reactive lifecycle hooks in order: (1) Mounting phase (2) Render method. (3) componentDidMount phase (4) Unmounting phase
class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  // MOUNTING PHASE of lifecycle hook: constructor method is called. it is called only once when the instance of the class is created.
  constructor() {
    super();
    console.log('App-Constructor');
  }

  // COMPONENTDIDMOUNT PHASE OF LIFECYCLE HOOK: This method is called after component is rendered into the DOM.
  // This is the perfect place for get data from the server (AJAX calls).
  componentDidMount() {
    // Ajax call
    // this.setState({})
    console.log('App-Mounted');
  }

  handleIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };


  // Render phase of lifecycle hook: Once a component is rendered. their childrens are also rendered recursively.
  render() {
    console.log('App-Rendered');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDelete={this.handleDelete}>
          </Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

