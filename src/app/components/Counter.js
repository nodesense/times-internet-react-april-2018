
import React from "react";
import PropTypes from "prop-types";

// stateless component
// redux- presentational component
export default function Counter(props) { 
        console.log("Counter called ");
        
        return (
            <div> 
            <h2>Counter</h2>
            <p> Counter : {props.counter}</p>
            <button onClick={(e) => props.increment(1) }>
                    +1
            </button>

            </div>
        )
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    
}