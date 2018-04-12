import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

// TODO: Code Split
import Cart from "./cart/components/Cart";

export class App 
        extends React.Component {
  constructor() {
      super();

      // not recommend, use STATE
      //this.year = 2018;

      // GOOD, for component data
      // react keyword
      this.state = {
          year: 2018
      }
  }   

    // react keyword
    // creates and return vitrual dom
    // called by react
render() {
    return (
       <div>
           <Header title="Product app" />

            <Cart />

           {/* <Home /> */}

           <Footer  year={this.state.year} />
       </div>
    )
}
}