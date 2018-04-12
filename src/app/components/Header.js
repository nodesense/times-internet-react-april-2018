// React.Component == Component
import React, {Component} from "react";

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
            </div>
        )
    }
}