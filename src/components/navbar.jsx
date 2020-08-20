import React, { Component } from 'react';

// Statefull component: are react component with class.
// Stateless functional component (sfc)/Presentational components or dumb component: 
// SFC is a function returning a react elements. Hence, a function was created and class was removed.
// if we are using SFC, then we need to pass props as an argument to the function. 
// Since, props becomes local to the component. Hence, we should not use "this" key inside the function refering to props.
// React lifecycle hook can't be used for stateless functional component.
// Why SFC: We create SFC just for representation and managing clear data follow. 
// That means that just to get data from the parent and display to the UI.
// Hence, we create several SFC. 

const NavBar = (props) => {
    console.log('NavBar-Rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
};


export default NavBar;