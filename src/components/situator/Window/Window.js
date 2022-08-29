import React from "react";
import "./Window.css";

const Window = (props) => {
  return <div className="window">{props.children}</div>;
};

export default Window;
