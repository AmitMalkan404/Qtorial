import "./Incident.css";
const Incident = (props) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const name =
    props.incident.incidentType + " / " + props.incident.incidentSeverity;

  const getWrapperClassName = () => {
    if (props.selected) return "incidentWrapper selected";
    return "incidentWrapper";
  };

  return (
    <div className={getWrapperClassName()} onClick={props.onIncidentClicked}>
      <div className={"incident-row-container"}>
        <span>
          <label className={"incident-name-text"}>{props.incident.name}</label>
        </span>
        <label>some icons</label>
      </div>
      <div className={"incident-row-container"}>
        <label className={"incident-type-text"}>{name}</label>
        <label className={"incident-type-text"}>
          {props.incident.creationTime.toLocaleString("en-US", options)}
        </label>
      </div>
    </div>
  );
};
export default Incident;
// name, incidentType, incidentSeverity, creationTime, acknowledge
