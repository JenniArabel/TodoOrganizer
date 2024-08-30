import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completed, total, message }) {
  return (
    <>
      <h1 className="Title"> ToDo Organizer </h1>

      {message ? (
        <h4 className="TodoCounter"> {message} </h4>
      ) : (
        <h4 className="TodoCounter">
          Has completado
          <span> {completed} </span>
          de
          <span> {total} </span>
          tareas
        </h4>
      )}
    </>
  );
}

export { TodoCounter };
