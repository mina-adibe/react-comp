import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  return (
    <div className="ui container comments ">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="auther">
            sam
          </a>

          <div>
            <span className="date">today at 4:00 am </span>
          </div>
          <div className="text">nice blog post</div>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
