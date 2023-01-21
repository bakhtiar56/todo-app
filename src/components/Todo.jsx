import { useState } from "react";
export function Todo({ todo, index, completeTodo, removeTodo,handleUpdateTask}) {
const [editTask,SetEditTask]=useState(todo.text)
const [isEditing,SetIsEditing]=useState(false)

  
  



  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
       {!isEditing ?(<h4 onDoubleClick={()=>SetIsEditing(true)}>{todo.text}</h4>):(
        <input onBlur={(e)=>handleUpdateTask(e,index,editTask,SetIsEditing)} value={editTask} onChange={(e)=>SetEditTask(e.target.value)} type="text" />
       ) }
      <div className="actions">
        <button title="complete task" className="complete-button" onClick={() => completeTodo(index)}>Complete</button>
        <button title="remove task" className="remove-button" onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}