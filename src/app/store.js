// API 1
import {createStore, combineReducers} from "redux";


// counterReducer.js
const INITIAL_STATE = 0
function counterReducer(state = INITIAL_STATE, action) {
    console.log("counterReducer ", state, action);

    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload.value
        default:
            return state;
    }
}


let rootReducer = combineReducers({
    //stateName: reducerFn
    counter: counterReducer, 
    //items: cartReducer,
    //auth: authReducer
})


let store = createStore(rootReducer);

export default store;


// LEARNING
// API 2


// API 4
// called after dispatch, reducers
store.subscribe (function callback() {
    console.log("SUBSCRIBE");
})


console.log("STATE ", store.getState());

let action = {
    type: 'INCREMENT',
    payload: {
        value: 10
    }
}



console.log("DISPATCH ACTION", action);
// API 3
store.dispatch(action); // call reducer

console.log("STATE ", store.getState());

action = {
    type: 'INCREMENT',
    payload: {
        value: 5
    }
} 

console.log("DISPATCH ACTION", action);
store.dispatch(action); // call reducer

console.log("STATE ", store.getState());
