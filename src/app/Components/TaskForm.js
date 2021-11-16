import React from "react";

function TaskForm(props) {
    return(
      <form className="task-form-container" onSubmit={addTask}>
        <div className="input-container">
          <span>Title</span>
          <input type="text" />
        </div>
        <div className="input-container">
          <span>Description</span>
          <textarea></textarea>
        </div>
        <div className="flex-row input-container">
          <span>Completed</span>
          <input type="checkbox" />
        </div>
        <div className="task-actions">
          <button type="submit">Agregar</button>
        </div>
      </form>
    )
}

function addTask(e){
  e.preventDefault();
  console.log('Adding');
}

export default TaskForm