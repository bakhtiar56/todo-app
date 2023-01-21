import { useState } from 'react'
import { Todo } from './components/Todo';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a to-do app', isCompleted: false },
    { text: 'Deploy to production', isCompleted: false },
  ]);
  const [value, setValue] = useState('');


  const handleAddTask = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  
  function handleUpdateTask(e,index,text,SetIsEditing){
    //If user clicks on task, its status will turn to update
    e.preventDefault()
    
      const newTodos=[...todos]
      newTodos[index].text=text
      setTodos(newTodos)
      SetIsEditing(c=>!c)
  
    
    



  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };
const removeTodo=((index)=>{
  const newTodos=[...todos]
  newTodos.splice(index,1)
  setTodos(newTodos)
})

const completeTodo=((index)=>{
  const newTodos=[...todos]
  newTodos[index].isCompleted=!newTodos[index].isCompleted;
  setTodos(newTodos)
})
  return (
    <>
    <div className="todo-app">
      <div className="todo-header">
        <h1 className='heading'>My Todo List</h1>
        <form>
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new to-do..."
        />
        <button className='add-task' onClick={handleAddTask}>Add Task</button>
      </form>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            handleUpdateTask={handleUpdateTask}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
