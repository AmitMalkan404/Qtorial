import React from "react";
import "./EntityPane.css";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const timeOptions = { hour: "2-digit", minute: "2-digit" };

const EntityPane = ({ selectedIncident }) => {
  return (
    <div className="entity-panel-container">
      <div className={"entity-panel-header-name"}>
        {selectedIncident.name} \
        <span className={"entity-panel-header-type"}>
          {selectedIncident.incidentType}
        </span>
      </div>
      <div className={"entity-panel-header-time"}>
        {selectedIncident.creationTime.toLocaleTimeString("en-US", timeOptions)}
        {", "}
        {selectedIncident.creationTime.toLocaleDateString("en-US", dateOptions)}
      </div>
      <div className={"entity-panel-tabs"}>
        <div className={"entity-panel-tab-text"}>Tasks +</div>
      </div>
      <div className={"entity-panel"}>Panel content</div>
    </div>
  );
};
export default EntityPane;
