import { ReactComponent as Amanda } from "../../Assets/Karen.svg";
import ReactDOM from "react-dom";
import "./Tutorial.css";
import { useEffect, useRef } from "react";
import {
  Button,
  Card,
  Popover,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import ModalConversation from "./ModalConversation";

const Backdrop = (props) => {
  return <div className={"backdrop"} onClick={props.onBackdropClicked} />;
};

const Model = (props) => {
  return (
    <div className={"model-container"}>
      <ModalConversation />
    </div>
  );
};

const tutorial = (props) => {
  return (
    <div className={"tutorial-container"}>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Model />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
export default tutorial;
