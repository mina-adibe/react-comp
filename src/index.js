import React from "react";
import ReactDOM from "react-dom";
import Cnn from "./cnn.js";

import "./styles.css";

const App = () => {
  return (
    <div className="ui container comments ">
      <Cnn auther="sam" timeAgo="today at 4.5" content="nice one blog" />
      <Cnn auther="alex" timeAgo="today at 3.5" content="noce two blog" />
      <Cnn auther="jane" timeAgo="today at 2.5" content="nice three blog" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
