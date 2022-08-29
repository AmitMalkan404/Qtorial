import React from "react";
import "./ModuleBar.css";

const ModuleBar = (props) => {
  const generateLeftModule = () => {
    return (
      <span>
        {props.leftModules.map((op) => (
          <button className="button" key={op}>
            {op}
          </button>
        ))}
      </span>
    );
  };
  const generateRightModule = () => {
    return (
      <span>
        {props.rightModules.map((op) => (
          <button className="button" key={op}>
            {op}
          </button>
        ))}
      </span>
    );
  };

  return (
    <div className="barContainer">
      {generateLeftModule()}
      {generateRightModule()}
    </div>
  );
};
export default ModuleBar;