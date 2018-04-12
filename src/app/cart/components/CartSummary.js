// CartSummary.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

//PureComponent implements shouldComponentUpdate
//shallow compare nextProps and current props
//shallow compare nextState and current state
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props); 

        this.state = {
            discount: 0,
            grandTotal : 0
        }
    }

    recalculateDiscount(props) {
        let discount = 0;

        if (props.count > 5) {
            discount = 20;
        }

        this.setState({
            discount,
            grandTotal: props.amount - (props.amount * discount / 100)
        })
    }

    componentWillMount() {
        this.recalculateDiscount(this.props);
    }

    // update cycle
    // called on updates only
    // when: whenever parent render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log("cart summary will receive");
        console.log("current props ", this.props);
        console.log("next props", nextProps);

        if (this.props.count != nextProps.count || 
            this.props.amount != nextProps.amount) {
                this.recalculateDiscount(nextProps);
        }
    }


    // called only on update cycle
    // when: when parent render called on update cycle
    // when: when component.setState for this component
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log ("cart summary should update");
    //     console.log("Current state ", this.state);
    //     console.log("next state", nextState);
        
    //     return this.props.amount != nextProps.amount || 
    //            this.props.count != nextProps.count || 
    //            this.state.discount != nextState.discount ||
    //            this.state.grandTotal != nextState.grandTotal;
    // }
     
    
    render() {
        console.log("CartSummary render");
        // deconstruct
        let {amount, count} = this.props;

        return (
            <div> 
            <h2>Cart Summary</h2>

            <p> Amount : {amount}</p>
            <p> Discount : {this.state.discount} % </p>
            <p>GrandTotal: {this.state.grandTotal}</p>
            <p> Items : {count} </p>


            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}