import React, {useState} from 'react';
import './App.css';

function Todo({todo, index, completeTodo, removeTodo}){
  return <div className="todo" style = {{textDecoration: todo.isCompleted ? 'line-through' : '' }}>
  {todo.text}
  <div>
    <button onClick = {() => completeTodo(index) } > Complete </button>
    <button onClick = {() => removeTodo(index) } > Remove </button>
  </div>
  </div>;
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };
  return(
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    className="input" 
    value={value} 
    onChange={e => setValue(e.target.value)}
    placeholder ="Add todo..."
    />
    </form>
  );
}

function App () {
  const [todos, setTodo] = useState([
  {text: "Learn React",
    isCompleted: false
  },
  {text: "Meet with Boss",
    isCompleted: false
  },
  {text: "Attend the meeting with Binod",
    isCompleted: false
  }
  ]);
  const addTodo = text =>{
    const newTodo = [...todos, {text}];
    setTodo(newTodo);
  };
  const completeTodo = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  };
  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  return (
    <div className="App">
      <div className= "todo-list">
      {todos.map((todo, index) =>(
        <Todo key={index} index={index} 
        todo={todo} completeTodo ={completeTodo} 
        removeTodo ={removeTodo} />
      ))}
      <TodoForm addTodo ={addTodo} />
      </div>
    </div>
  );
}
export default App;
