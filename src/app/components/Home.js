import React from "react";

export default class Home 
        extends React.Component {

    constructor() {
        super();

        this.state  = {
            counter: 0,
            show: true,
            frameworks: ['react', 'redux']
        }

        this.count = 0;
    }

    increment(e) {
        console.log("Inc ", e);

        // not for production
        //console.trace(); //prints call stack

        //BAD: direct state mutation
        this.state.counter++;
        console.log("Counter ", this.state.counter);

        //BAD
        // trigger react calls render method
        this.forceUpdate();
    }

    //ES.NEXT 
    decrement = () => {
        console.log("decrement called");

         
        // setState is Async
        console.log("counter before", 
                    this.state.counter)
        //GOOD, trigger render method
        this.setState({
            counter: this.state.counter - 1
        }, () => {
            console.log("setState callback");
            this.setState({
                counter: this.state.counter - 1
            })
        })

        // toggle
        this.setState({
            show: !this.state.show
        })

        console.log("counter after", 
        this.state.counter)
    };

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        console.log("Home render ", this.state.counter);

        return (
            <div>
                <p> Counter {this.state.counter}</p>

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