import logo from "./logo.svg";
import "./App.css";
import Window from "./components/situator/Window/Window";
import ModuleBar from "./components/situator/ModuleBar/ModuleBar";
import EntityPane from "./components/situator/EntityPane/EntityPane";

function App() {
  return (
    <Window>
      <ModuleBar
        leftModules={["sfaf", "fasfsafsaf", "safa"]}
        rightModules={["sfaf", "fasfsafsaf", "safa"]}
      />
      <EntityPane />
    </Window>
  );
}

export default App;
