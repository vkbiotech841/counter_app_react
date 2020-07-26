import React, { Component } from 'react';

// Stateless functional component (sfc): function returning a react elements. Hence, a function was created and class was removed.
// if we are using SFC, then we need to pass props as an argument to the function. 
// Since, props becomes local to the component. Hence, we should not use "this" key inside the function refering to props.
// React lifecycle hook can't be used for stateless functional component.

const NavBar = (props) => {
    console.log('NavBar-Rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                Navbar{" "}
                <span className="badge badge-pill badg-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
};


// class NavBar extends Component {
//     render() {

//     }
// }

export default NavBar;