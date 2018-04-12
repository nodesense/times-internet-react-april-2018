
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
    }
     
    // keyword method
    // callbacks
    // called before render
    componentWillMount() {
        console.log("CartItem will mount");
    }

    // called after render
    componentDidMount() {
        console.log("CartItem did mount");
    }

    // called just before view unmount
    componentWillUnmount() {
        console.log("cartItem will unmount");
    }

    
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    {item.qty}
                </td>
                <td>
                    {item.price * item.qty}
                </td>
                <td>
                    <button >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}