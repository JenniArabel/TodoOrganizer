import './App.css';
import React from 'react';
import { TodoCounter } from './assets/TodoCounter';
import { TodoSearch } from './assets/TodoSearch';
import { TodoList } from './assets/TodoList';
import { TodoItem } from './assets/TodoItem';
import { CreateTodoButton } from './assets/CreateTodoButton';


const defaultTodos = [
  {text: 'Estudiar', completed: true},
  {text: 'Hacer investigación', completed: false},
  {text: 'Hacer TPs', completed: false},
  {text: 'Clase estados derivados', completed: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  const totalTodos = todos.length;

  console.log('Los usuarios buscan ' + searchValue);

  return (
    <div className='App'>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
