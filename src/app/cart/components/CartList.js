
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
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