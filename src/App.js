import React, {useState} from 'react';
import './App.css';

function Todo({todo, index}){
  return <div className="todo">{todo.text}</div>;
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
  return (
    <div className="App">
      <div className= "todo-list">
      {todos.map((todo, index) =>(
        <Todo key={index} index={index} todo={todo} />
      ))}
      </div>
    </div>
  );
}
export default App;
