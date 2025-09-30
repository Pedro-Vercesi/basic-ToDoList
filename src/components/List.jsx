import Tasks from "./Tasks";

const List = ({ tasks, deleteTask, moveTask, toggleComplete }) => {
  return (
    <ul className="list-container">
      {tasks.map((task) => (
        <Tasks
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          moveTask={moveTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default List;
