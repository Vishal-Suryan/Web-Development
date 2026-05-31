import { useState } from "react";
import "./InputBar.css";
function InputBar({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return; // guard: no empty tasks
    onAdd(text.trim());
    setText(""); // clear after adding
  };

  return (
    <div className="input-bar">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default InputBar;
