import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`} > {" "} {props.text} {" "} </p>

      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <ImCross />
      </span>
    </li>
  );
}

export { TodoItem };
