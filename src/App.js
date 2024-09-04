import "./App.css";
import React from "react";
import { TodoCounter } from "./assets/TodoCounter";
import { TodoSearch } from "./assets/TodoSearch";
import { TodoList } from "./assets/TodoList";
import { TodoItem } from "./assets/TodoItem";
import { CreateTodoButton } from "./assets/CreateTodoButton";

// const defaultTodos = [
//   { text: "Estudiar", completed: true },
//   { text: "Hacer investigación", completed: false },
//   { text: "Hacer TPs", completed: false },
//   { text: "Clase estados derivados", completed: true },
// ];

// localStorage.setItem("TODOS", JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS');

function App() {
  //Local Storage: persistencia en el navegador
  const localStorageTodos = localStorage.getItem("TODOS");
  let parsedTodos;

  if (!localStorageTodos) {
    /* En caso de que sea la 1ra vez que un usuario entra y no hay nada en localStorage */
    localStorage.setItem(
      "TODOS",
      JSON.stringify([])
    ); /* Hay que stringify xq debemos pasar de objetos a string xq localStorage no soporta objetos complejos*/
    parsedTodos = [];
  } else {
    /* CASO CONTRARIO, si hay algo en localStorageTodos */
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //Estados del componente
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  //Variables o estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //Funcionalidad de búsqueda
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase(); //.toLocaleLowerCase incluye acentos

    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  //Fx que actualice al Estado y al Local Storage al mismo tiempo (ACTUALIZAR ESTADO CON PERSISTENCIA)
  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  //Fx para completar una tarea
  const completeTodo = (text) => {
    //Recibe un texto
    const newTodos = [...todos]; //Hace una copia del estado actual de las tareas

    const todoIndex = newTodos.findIndex(
      //Encuentra el indice de la tarea
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = true; //Cambia la propiedad completed a true

    saveTodos(newTodos); //Actualiza el estado de todos con la lista modificada
  };

  //Fx para eliminar una tarea
  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1); //Elimina la tarea de la lista usando splice

    saveTodos(newTodos);
  };

  //Mensaje basado en los estados de las tareas
  let message = "";
  if (totalTodos === 0) {
    message = "Crea tu primer tarea";
  } else if (completedTodos === totalTodos) {
    message = "¡Felicitaciones! No hay tareas pendientes";
  }

  //Renderizado
  return (
    <div className="App">
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
        message={message}
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
