import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

// SHORT-CUTS:
// First add Simple React Snippet.
// import react : type "imrc"
// create a class : type "cc"
// create a stateless function: type "sfc"

// Reactive lifecycle hooks in order: 
// (1) Mount phase (constructor, render and componentDidMount methods)
// (2) Update phase (render and componentDidUpdate methods)
// (3) Unmount phase (ComponentWillUnmount)
class App extends Component {

  // State: is an object. it is data collection that we want to render.
  // this.setState() : In react, we use this function to update the state object. In angular, we need to update the state. Angular works on self detection function.
  // this.setState function is slowmly response to detecting changes => update to the virtual DOM. 
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  // MOUNTING PHASE of lifecycle hook: constructor method is called. it is called only once, when the instance of the class is created.
  // super(): called the constructor of the parent component. it is important to call the function the parent component constructor.
  // super() function allow "this" key word to the accessable to the component. 
  constructor() {
    super();
    console.log('App-Constructor');
  }

  // COMPONENT DID MOUNT PHASE OF LIFECYCLE HOOK: This method is called after component is rendered into the DOM.
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
    this.setState({ counters: counters });
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
  // Render is responsible for how UI should look like. 
  // The output of render method is a react element. Which is simple javascript object that map to a DOM element. 
  // Virtual DOM: Since, output of render method is just a plan javascript object. Hence, it is not a real DOM. Hence, it is called virtual DOM.
  // React keep a light weight representation of DOM in the memory. This is called as Virutal DOM.
  // Web browsers have real DOM.

  // React: meaning "Re" + "act".
  // change state => new react element => reacts compares its components and childrens with its previous virtual DOM => Updates the real DOM.


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


// Difference between state and props: 
// State: stores data those are local or private to the component. Other component can not access state data.
// other component wish to modify the state, the other component need to raise an event (function call).


//Props: wherease props stores data that transfer to the other components (Child). 
// props are read only. it can act as input to the other component but other component can not be change it. 



// THUMB RULE: 
// The component that ows a piece of the state, should be the one modifying it.
