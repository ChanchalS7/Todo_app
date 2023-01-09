import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [task, seTask] = useState("");
  const handleClick = () => {
    addTask(task);
    seTask("");
  };

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={task} onChange={({ target }) => seTask(target.value)}/>
      <button data-testid="add-task-button" onClick={handleClick}>+</button>
    </div>
  );
};

export default AddTask;
