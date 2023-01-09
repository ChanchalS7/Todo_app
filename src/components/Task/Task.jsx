import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import remove from "../../assets/remove.svg";

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  function toggleTaskStatus() {
    handleUpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const CountUpdate = (newCount) => {
    if (newCount > 0) {
      handleUpdateTask({
        ...task,
        count: newCount,
      });
    }
  };
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onChange={toggleTaskStatus} checked={task.done}/>
      <div data-testid="task-text">
      {task.text}
      </div>
      <Counter taskId={task.id} count={task.count} CountUpdate={CountUpdate}/>
      <button id="btn" data-testid="task-remove-button" onClick={() => handleRemoveTask(task.id)}>
      <img src={remove} alt="remove button text" />
      </button>
    </li>
  );
};

export default Task;
