import {connect} from "react-redux";

import Counter from "../components/Counter";

// called by container
// returns props from state
//when called on subscribe
// state => store.getState() {counter: 12, ..}
function mapReduxStateToReactProps(state) {
    console.log("map state to props", state);
    return {
        //propName: value from state
        counter: state.counter
    }
}

// store.dispatch == dispatch
// called by container
// called for every new instance of component
function mapReduxDispatchToReactPros(dispatch) {
    return {
        //propName: function() {}
        increment: function(value) {
            let action = {
                type: 'INCREMENT', 
                payload: {value}
            }

            dispatch(action);
        }
    }
}


// decorator, es.next @
let connectFn = connect(mapReduxStateToReactProps,
                        mapReduxDispatchToReactPros);

// where is store?
// store shall be provided by Provider


// returns container component
// pure component
let CounterContainer = connectFn(Counter);

export default CounterContainer;