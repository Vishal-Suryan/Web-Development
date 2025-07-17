import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };
  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
      <button onClick={startTimer} disabled={isRunning}>
        Resume Timer
      </button>
    </div>
  );
}

export default Timer;
