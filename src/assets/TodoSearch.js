import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Buscar tarea"
        value={searchValue} //recibiendo los valores
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
