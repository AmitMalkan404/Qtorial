import EntityPane from "../EntityPane/EntityPane";
import LeftPanel from "../LeftPanel/LeftPanel";
import "./EntityContainer.css";
import { useState } from "react";
import Tutorial from "../../UI/Tutorial";

const mockIncident = [
  {
    incidentID: 1,
    name: "test",
    incidentType: "General",
    incidentSeverity: "Normal",
    creationTime: new Date(),
    acknowledge: false,
  },
  {
    incidentID: 2,
    name: "test2",
    incidentType: "Fire Alarm",
    incidentSeverity: "Normal",
    creationTime: new Date(),
    acknowledge: false,
  },
];

const EntityContainer = (props) => {
  const [incidents, setIncidents] = useState(mockIncident);
  const [selectedIncident, setSelectedIncident] = useState(mockIncident[0]);
  return (
    <>
      <Tutorial />
      <div className={"entity-container"}>
        <LeftPanel
          incidents={incidents}
          onIncidentSelected={(incident) => setSelectedIncident(incident)}
          selectedIncident={selectedIncident}
        />
        <div className={"separator"} />
        <EntityPane selectedIncident={selectedIncident} />
      </div>
    </>
  );
};
export default EntityContainer;
