import { useRef } from "react";

function FocusInput() {
  const input = useRef(null);
  const handleClick = () => {
    if (input.current) {
      input.current.focus();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Click the button to Focus:"
        onChange={(e) => {
          e.target.value;
        }}
        ref={input}
      />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default FocusInput;
