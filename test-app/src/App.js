import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function MyApp() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const todoInputChange = (e) => {
    setTodo(e.target.value);
  }
  const onAddTodoClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo, isChecked: false }]);
    setTodo('');
  }

  
  const onDeleteTodoClick = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList); 
  }
  const onTodoCheckChange = (id) => {
    const updatedTodoList = todoList.map(todo => todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo);
    console.log(updatedTodoList);

    setTodoList(updatedTodoList);
  }


  console.log(todoList);


  return (
    <div className="App">
      <h1>My Wish List</h1>
      <input value={todo} onChange={todoInputChange} placeholder="Enter your wish" />
      <button onClick={onAddTodoClick}>Add Wish</button>
      <div>
        {
          todoList && todoList.length > 0 && todoList.map(todo => (
            <div key={todo.id}>
              <label>
                <input onChange = {() => onTodoCheckChange(todo.id)} type='checkbox' />
                <span className={todo.isChecked ? 'strike-through' : ''} >{todo.todo}</span>
              </label>
              <button onClick={() => onDeleteTodoClick(todo.id)}>X</button>
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default MyApp;
