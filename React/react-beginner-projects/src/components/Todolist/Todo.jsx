import { useState } from "react";
import "../../todo.css";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodo((todo) => {
      return todo.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInput("");
  };

  const removeTodo = (id) => setTodo((todo) => todo.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todo.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
