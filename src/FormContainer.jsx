import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import GridApp from "./GridApp.js";


const numbers = [1, 2, 3, 4, 5, 6];

// https://gridbyexample.com/examples/example1

function App() {
  return (
    <div className="App">
      <GridApp listItems={numbers} />
    </div>
  );
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
