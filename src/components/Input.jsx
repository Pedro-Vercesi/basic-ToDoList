const Input = ({ handleInput, addTask, input }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => handleInput(e)}
        placeholder="Add Task"
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />
      <button onClick={addTask} className="btn btn-input">
        Add Task
      </button>
    </div>
  );
};

export default Input;
