import './App.css';
import { TodoCounter } from './assets/TodoCounter';
import { TodoSearch } from './assets/TodoSearch';
import { TodoList } from './assets/TodoList';
import { TodoItem } from './assets/TodoItem';
import { CreateTodoButton } from './assets/CreateTodoButton';


const defaultTodos = [
  {text: 'Estudiar', completed: true},
  {text: 'Hacer investigación', completed: false},
  {text: 'Hacer TPs', completed: false},
];

function App() {
  return (
    <div className='App'>
      <TodoCounter 
        completed={1}
        total={3}
      />

      <TodoSearch />

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
