import React from "react";
import ReactDOM from "react-dom";
import GridApp from "./GridApp.js";

import "./styles.css";

const numbers = [1, 2, 3, 4, 5, 6];

// https://gridbyexample.com/examples/example1

function App() {
  return (
    <div className="App">
      <GridApp listItems={numbers} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
