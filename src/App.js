import logo from "./logo.svg";
import "./App.css";
import Window from "./components/Window/Window";
import ModuleBar from "./components/situator/ModuleBar/ModuleBar";
import EntityPane from "./components/situator/EntityPane/EntityPane";
import {useState} from "react";
import VideoModule from "./components/WebClient/Video/VideoModule";

export const Product = {
    Situator: 0,
    WebClient: 1,
    Cayuga: 2,
}

function App() {
    const [currentProduct, setCurrentProduct] = useState(null)


    return (
    <Window>
        {currentProduct===null && (<div>
          <button onClick={() => {setCurrentProduct(Product.Situator)}}>
              Situator
          </button>
          <button onClick={() => {setCurrentProduct(Product.WebClient)}}>
              WebClient
          </button>
          <button>
              Cayuga
          </button>
      </div>)}
        {currentProduct===Product.Situator && (<ModuleBar
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
      /> &&
      <EntityPane />)}
        {currentProduct=== Product.WebClient &&(
            <VideoModule/>
        )}
    </Window>
    );
}

export default App;
