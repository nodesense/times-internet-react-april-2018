// CartItem.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            // mutable
            qty: props.item.qty
        }


    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        })
    }
     
    // keyword method
    // callbacks
    // called before render
    componentWillMount() {
        console.log("CartItem will mount");

    }

    // called after render
    // all refs resolved here
    componentDidMount() {
        console.log("CartItem did mount");
        // calling direct dom api
        this.inputElement.focus();

        // all string refs 
        // refs is keyword
        //myspan is real dom (span)
        this.refs.myspan.textContent = 'remove';
    }

    // called just before view unmount
    componentWillUnmount() {
        console.log("cartItem will unmount");
    }

    //ES.NEXT 
    onChangeValue = (e) => {
        // target is real dom (input element)
        console.log(e.target.value);

        this.setState({
            qty: e.target.value
        })
    }

    // All the ref are resolved after render,
    // before componentDidMount

    
    render() {
        // item is immutable
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
                    {/* todo: item is prop, read only */}
                    <input value={this.state.qty}
                           onChange={this.onChangeValue}
                           onBlur={ () => this.props.updateItem(item.id, parseInt(this.state.qty))}

                           ref={ (elem) => this.inputElement = elem }

                    />
                </td>
                <td>
                    {item.price * item.qty}
                </td>
                <td>
                    <button onClick={ () => this.props.removeItem(item.id)} >
                        Delete
                    </button>
                    {/* all string refs, available as this.refs */}
                    <span ref="myspan">SPAN</span>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}