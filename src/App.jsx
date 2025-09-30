import { useEffect, useState } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim()) {
      const newTask = {
        id: Date.now(),
        title: input.trim(),
        createdAt: new Date().toISOString(),
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, dir) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === id);
    const newIndex = dir === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= updatedTasks.length) return;

    const temp = updatedTasks[index];
    updatedTasks[index] = updatedTasks[newIndex];
    updatedTasks[newIndex] = temp;

    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(
        (task) => (task.id === id ? { ...task, completed: true } : task) // forzar a true
      )
    );
  };

  return (
    <>
      <h1>To-Do List</h1>
      <div className="main-container">
        <Input input={input} handleInput={handleInput} addTask={addTask} />
        <List
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  );
}

export default App;
