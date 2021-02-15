import ReactDOM from "react-dom";
import history from "../history";
export const Modal = ({ title = "Modal", content = "", actions = <></>, route = "/" }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={() => history.push(route)}>
      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
