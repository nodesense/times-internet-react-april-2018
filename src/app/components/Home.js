import React from "react";

// throw away
// learing redux in react
import store from "../store";

export default class Home 
        extends React.Component {

    constructor() {
        super();

        this.state  = {
            show: true,
            frameworks: ['react', 'redux']
        }
 
    }

    increment(e) {
        console.log("Inc ", e);
        let action = {
            type: 'INCREMENT',
            payload: {
                value: 1
            }
        }

        store.dispatch(action);
    }

    //ES.NEXT 
    decrement = () => {
        console.log("decrement called");
        
    };

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
       this.unsubcribeFn = store.subscribe(() => {
            console.log("HOME SUBS", Math.random());
            this.forceUpdate(); // calls render
        });

        // unique id for timer
        this.handle = setInterval(()=> {
            console.log("Timer ")
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.handle);
        this.unsubcribeFn();
    }

    render() {
        // TODO redux store
        let counter = store.getState().counter;

        console.log("Home render ", counter);

        return (
            <div>
                <p> Counter {counter}</p>

                <button onClick={(e) => this.increment(e) }>
                    +1
                </button>

                <div onClick={this.decrement}>

                    <button onClick={this.decrement}>
                        -1
                    </button>

                </div>

                {/* JSX Comment */}

                <button onClick={this.toggle}>
                    { this.state.show? "Hide" : "Show" }
                </button>

                { this.state.show &&
                    <ul>
                        {
                        this.state.frameworks
                            .map ( name => (
                                <li key={name} >{name}</li>
                            ))
                        }
                    </ul>   
                }

            </div>
        )

    }

}