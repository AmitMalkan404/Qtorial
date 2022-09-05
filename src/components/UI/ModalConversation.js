import { ReactComponent as Karen } from "../../Assets/Karen.svg";
import "./ModalConversation.css";

const ModalConversation = (props) => {
  const getBubbleChat = (message) => {
    return (
      <div className="bubble bubble-bottom-left" contentEditable>
        <p className={"conversation-text"}>{message}</p>
      </div>
    );
  };
  return (
    <div className={"modal-layout"}>
      <Karen className={"heyy"} />

      {getBubbleChat(
        "Type any text here and the bubble will growa to fit the text no matter how many lines. Isn't that niftyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh?"
      )}
    </div>
  );
};

export default ModalConversation;
