import "./LeftPanel.css";
import Incident from "../Incident/Incident";
import { useState } from "react";

const LeftPanel = (props) => {
  const [selectedIncident, setSelectedIncident] = useState(-1);

  const handleIncidentClicked = (incidentID) => {
    setSelectedIncident(incidentID);
  };

  return (
    <div className={"left-panel-container"}>
      <div className={"panelHeader"}>
        <label>Incident Log</label>
        <div>some icons</div>
      </div>
      <label className={"acknowledged"}>Incident to acknowledge</label>
      <div className={"incidentContainer"}>
        {props.incidents &&
          props.incidents.map((incident) => (
            <Incident
              key={incident.incidentID}
              incident={incident}
              selected={
                props.selectedIncident &&
                props.selectedIncident.incidentID === incident.incidentID
              }
              onIncidentClicked={() => props.onIncidentSelected(incident)}
            />
          ))}
      </div>
      <label className={"summery"}>(1) new, (0) acknowledged</label>
    </div>
  );
};
export default LeftPanel;
