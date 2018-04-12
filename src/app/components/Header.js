// React.Component == Component
import React, {Component} from "react";

import {NavLink} from "react-router-dom";

// React creates object for class component
export default class Header 
                extends Component {
    constructor() {
        super(); //MUST, first line
        console.log("Header created");
    }

    render() {
        console.log("Header render");

        //props is react keyword
        // props contains child properties
        // passed by parent

        // READ ONLY
        //this.props.title = "something";

        let title = this.props.title;
         

        return (
            <div>
                <h1>{title}</h1>

                <NavLink to="/"
                         className="button"
                >
                    Home
                </NavLink>

                 <NavLink to="/products"
                         className="button"
                >
                    Products
                </NavLink>

                 <NavLink to="/cart"
                         className="button"
                >
                    Cart
                </NavLink>

                 <NavLink to="/about"
                         className="button"
                >
                    About
                </NavLink>


                 <NavLink to="/counter"
                         className="button"
                >
                    Counter
                </NavLink>


                 <NavLink to="/contact"
                         className="button"
                >
                    Contact
                </NavLink>

            </div>
        )
    }
}