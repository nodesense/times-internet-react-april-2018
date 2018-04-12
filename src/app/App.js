import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

// TODO: Code Split
//import Cart from "./cart/components/Cart";

import Address from "./components/Address";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import About from "./components/About";

import Counter from "./containers/CounterContainer";


//Lazy load modules, split bigger modules into smaller
import Loadable from 'react-loadable';

function Loading() {
    return (
        <div> 
            Loading ...
        </div>
    )
}
 
const LoadableCartComponent = Loadable({
    loader: () => import('./cart/components/Cart'),
    loading: Loading,
  });
  

import {BrowserRouter, 
       Route,
       Switch
    } from "react-router-dom";

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
        <BrowserRouter>
            <div>
                <Header title="Product app" />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cart" component={LoadableCartComponent} />
                        <Route path="/about" component={About} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/contact" component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                <Footer  year={this.state.year} >
                        {/*  content children */}
                        <p> Contact Time: 9:00 AM to 6:00 PM</p>
                        <Address />
                </Footer>
            </div>
       </BrowserRouter>
    )
}
}