import React from "react";
import styles from "../style/app.css";

import Nav from "./Components/Nav"
import TaskForm from "./Components/TaskForm"

function App(){
    return(
      <div className="main">
        <Nav></Nav>
        <div className="container">
          <TaskForm></TaskForm>
          <div className="task-container">
            
          </div>
        </div>
      </div>
    )
}

export default App;