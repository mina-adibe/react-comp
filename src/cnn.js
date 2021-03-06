import React from "react";

const cnn = props => {
  return (
    <div className="comment">
      <div className="content">
        <a href="/" className="auther">
          {props.auther}
        </a>

        <div>
          <span className="date">{props.timeAgo} </span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default cnn;
