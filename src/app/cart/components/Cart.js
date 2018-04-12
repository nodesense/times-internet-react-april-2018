
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{id: 1, name: 'P1', price: 100, qty: 1}],
            amount: 0, // derived data from items
            count: 0,
            flag: true
        }
    }
     
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);

        let item = {
            id: id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO
        // BAD, 
        this.state.items.push(item);
        this.forceUpdate(); 
    }

    empty = () => {
        // Good
        this.setState({
            items: []
        })
    }

    removeItem = (id) => {

    }

    updateItem = (id, qty ) => {

    }

    refresh = () => {
        //dummy
        this.setState({
            flag: this.state.flag
        })
    }

    
    render() {
        console.log("Cart Render");
        
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>

            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>

            <CartList items={this.state.items} />
            <CartSummary amount={this.state.amount} 
                         count={this.state.count}
            />

            {
                this.state.flag?<p>Shown</p>:<p>Not Shown</p>
            }

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}