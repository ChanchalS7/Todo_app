import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let unCompletedTask = tasks.filter((task) => !task.done).length;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <br />
    <div>
    <b data-testid="header-remaining-task">You Have {unCompletedTask} of</b> 
      <b data-testid="header-total-task">{totalTask} tasks remaining</b> 
    </div>
      
    </div>
  );
};

export default TaskHeader;
