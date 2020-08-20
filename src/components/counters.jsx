import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() {
        console.log('Counters-Rendered');
        // Access properties of a props using object destructing method.
        // In this case, we can remove if destruture the object, then we need to remove the this.props from evenwhere.
        // const { onReset, counters, onDelete, onIncreament } = this.props;
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>

                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDeleteCounter={this.props.onDelete}
                        onIncreamentCounter={this.props.onIncreament}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;