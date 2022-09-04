import { ReactComponent as Amanda } from "../../Assets/Amanda.svg";
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

const Backdrop = (props) => {
  return <div className={"backdrop"} onClick={props.onBackdropClicked} />;
};

const Model = (props) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  });
  return (
    <div className={"modal"}>
      <div className={"model-container"}>
        <Card id={"amanda"} ref={cardRef}>
          <Amanda />
        </Card>
      </div>

      <UncontrolledPopover
        placement="left"
        target={"amanda_start"}
        trigger="click"
      >
        <PopoverHeader>Click Trigger</PopoverHeader>
        <PopoverBody>
          Clicking on the triggering element makes this popover appear. Clicking
          on it again will make it disappear. You can select this text, but
          clicking away (somewhere other than the triggering element) will not
          dismiss this popover.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

const tutorial = (props) => {
  return (
    <div className={"tutorial-container"}>
      {/*{ReactDOM.createPortal(*/}
      {/*  <Backdrop />,*/}
      {/*  document.getElementById("backdrop-root")*/}
      {/*)}*/}
      {ReactDOM.createPortal(
        <Model />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
export default tutorial;
