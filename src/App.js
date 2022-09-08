import logo from "./logo.svg";
import "./App.css";
import Window from "./components/Window/Window";
import ModuleBar from "./components/situator/ModuleBar/ModuleBar";
import EntityPane from "./components/situator/EntityPane/EntityPane";
import {useState} from "react";
import VideoModule from "./components/WebClient/Video/VideoModule";
import EntityContainer from "./components/situator/EntityContainer/EntityContainer";

export const Product = {
    Situator: 0,
    WebClient: 1,
    Cayuga: 2,
}

function App() {
    const [currentProduct, setCurrentProduct] = useState(null)


    const renderContent = () => {

        switch (currentProduct) {
            case Product.WebClient:
                return <VideoModule/>;
                break;
            case Product.Situator:
                return (
                    <div><ModuleBar
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
        <EntityContainer />
                    </div>)
                break;
            default:
                return null;
                break;
        }
    }

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
        {renderContent()}
    </Window>
    );
}

export default App;
