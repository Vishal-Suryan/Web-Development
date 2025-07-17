import { useState } from "react";
import { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const handleAdd = () => {
    dispatch({ type: "increment", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleSubtract = () => {
    dispatch({ type: "decrement", payload: Number(inputValue) });
    setInputValue(0);
  };
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <input
        type="number"
        placeholder="Enter num to update Counter "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>ADD to Count</button>
      <button onClick={handleSubtract}>Subtract to Count</button>
    </div>
  );
}

export default Counter;
