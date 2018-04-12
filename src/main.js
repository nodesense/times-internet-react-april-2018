// load react app into browser
// bootstrapping

// virtual dom creation
import React from "react";

// diffing, patching virtual, real dom
import {render} from "react-dom";

// Virtual dom
import {App} from "./app/App";

import store from "./app/store";
import {Provider} from "react-redux";


// render(React.createElement(App) , // vdom
//        document.getElementById("root")
// )

// JSX - JavaScript + XML
// Babel convert JSX to JS
// Provider shall expose store to container
render( <Provider store={store}>
            <App /> 
        </Provider>
            , 
       document.getElementById("root")
)