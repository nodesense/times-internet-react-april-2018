// load react app into browser
// bootstrapping

// virtual dom creation
import React from "react";

// diffing, patching virtual, real dom
import {render} from "react-dom";

// Virtual dom
import {App} from "./app/App";

// render(React.createElement(App) , // vdom
//        document.getElementById("root")
// )

// JSX - JavaScript + XML
// Babel convert JSX to JS
render(<App /> , // vdom
       document.getElementById("root")
)