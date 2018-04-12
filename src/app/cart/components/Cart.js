// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{id: 1, name: 'P1', price: 100, qty: 3}],
            amount: 0, // derived data from items
            count: 0,
            flag: true
        }
    }

    recalculate(items) {
        let amount = 0, 
            count = 0;

        // using STATE for derived data, beware
        //for (let item of this.state.items) {
        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount, // ES6 amount: amount
            count
        })
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
        // BAD, directly mutated state, sync
        //this.state.items.push(item);
        //this.forceUpdate(); 

        //GOOD
        // immutable collection
        let cloneItems = [...this.state.items, item];
        this.setState({
            items: cloneItems
        })

        this.recalculate(cloneItems);
    }

    empty = () => {
        let items = [];
        // Good
        // set next state, batch update, async
        this.setState({
            items: items
        }, () => {
            // state is merged with current state
            // render also called
            console.log("Empty callback");
            // calls render again
            // this.recalculate();
        })

        //console.log("current state ", this.state.items);
        

        this.recalculate(items);
    }

    removeItem = (id) => {
        let items = this.state.items
                    .filter (item => item.id != id);
        
        this.setState({
            items
        })

        this.recalculate(items);
    }

    updateItem = (id, qty ) => {
        // immutable list, cart List
         let items = this.state.items
                     .map ( item => {
                        if (item.id != id) {
                            return item;
                        }

                        // update the item
                        //BAD: mutable
                        //item.qty = qty;
                        console.log("updated");
                        return {...item, qty};
                     });

        this.setState({
            items
        })

        this.recalculate(items)
        
    }

    refresh = () => {
        //dummy
        this.setState({
            flag: this.state.flag
        })
    }

    componentWillMount() {
        console.log("Cart will mount");
        this.recalculate(this.state.items);
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

            <CartList items={this.state.items}
                      updateItem={this.updateItem}
                      removeItem={this.removeItem}

            />
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