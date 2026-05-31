import { useReducer, useState } from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];

    case "DELETE":
      return state.filter((task) => task.id !== action.id);

    case "TOGGLE":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task,
      );

    default:
      return state;
  }
}
function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("all");

  // Filtering logic lives here (derived data, not extra state)
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "done") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <InputBar onAdd={(text) => dispatch({ type: "ADD", text })} />
      <FilterBar current={filter} onChange={setFilter} />
      <TaskList
        tasks={visibleTasks}
        onToggle={(id) => dispatch({ type: "TOGGLE", id })}
        onDelete={(id) => dispatch({ type: "DELETE", id })}
      />
    </div>
  );
}
export default App;
