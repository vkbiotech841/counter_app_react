import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

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

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncreament={this.handleIncreament}
                        counter={counter}>
                        <h6>Counter No.{counter.id}</h6>
                    </Counter>
                ))}
            </div>);
    }


}

export default Counters;