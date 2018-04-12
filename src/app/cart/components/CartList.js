// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

//purecompoent does shall compare
//compare two referrences
export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    
    render() {
        console.log("CartList render");

        let {items} = this.props;

        return (
            <div> 
            <h2>CartList</h2>

            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
{
    items.map ( item => (
        <CartItem key={item.id}
                  updateItem={this.props.updateItem}
                  removeItem={this.props.removeItem}
                  item={item} />
    ))
}
                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}