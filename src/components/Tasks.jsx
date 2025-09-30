const Tasks = ({ task, deleteTask, moveTask, toggleComplete }) => {
  return (
    <li>
      <span className={task.completed ? "task completed" : "task"}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} className="btn btn-list">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <button
        onClick={() => toggleComplete(task.id)}
        disabled={task.completed}
        className="btn btn-list btn-completed"
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button onClick={() => moveTask(task.id, "up")} className="btn btn-list">
        <i className="fa-solid fa-up-long"></i>
      </button>
      <button
        onClick={() => moveTask(task.id, "down")}
        className="btn btn-list"
      >
        <i className="fa-solid fa-down-long"></i>
      </button>
    </li>
  );
};

export default Tasks;
