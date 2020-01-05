import React from "react";
import ReactDOM from "react-dom";
import Cnn from "./cnn.js";

import "./styles.css";
import cnn from "./cnn.js";

const App = () => {
  return (
    <div className="ui container comments ">
      <Cnn />
      <Cnn />
      <Cnn />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
