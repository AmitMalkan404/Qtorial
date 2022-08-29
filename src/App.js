import logo from "./logo.svg";
import "./App.css";
import Window from "./components/situator/Window/Window";
import ModuleBar from "./components/situator/ModuleBar/ModuleBar";
import EntityPane from "./components/situator/EntityPane/EntityPane";

function App() {
  return (
    <Window>
      <ModuleBar
        leftModules={[
          "New Incident",
          "New Message",
          "Deploy Procedure",
          "Quick Launch",
          "Phone Dialer",
        ]}
        rightModules={[
          "Summary",
          "Incidents",
          "Maps",
          "Messages",
          "Sensors",
          "Video",
          "Access Control",
          "Administration",
        ]}
      />
      <EntityPane />
    </Window>
  );
}

export default App;
