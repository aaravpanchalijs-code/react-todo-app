
import { useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
   setTasks([...tasks, { text: input, completed: false }]);

    setInput("");
  };

  return (
    <div className="App" style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>My To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ol>
  {tasks.map((task, index) => (
    <li
      key={index}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        opacity: task.completed ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          const updatedTasks = [...tasks];
          updatedTasks[index].completed = !updatedTasks[index].completed;
          setTasks(updatedTasks);
        }}
      />

      <span style={{ marginLeft: "8px" }}>
        {task.text}
      </span>
    </li>
  ))}
</ol>


    </div>
  );
}

export default App;
