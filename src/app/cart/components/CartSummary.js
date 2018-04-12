
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);
    }
     
    
    render() {
        console.log("CartSummary render");
        // deconstruct
        let {amount, count} = this.props;

        return (
            <div> 
            <h2>Cart Summary</h2>

            <p> Amount : {amount}</p>
            <p> Items : {count} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}