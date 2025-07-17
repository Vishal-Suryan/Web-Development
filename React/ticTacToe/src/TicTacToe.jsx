import { useRef, useState } from "react";
import circle_icon from "./assets/circle.png";
import cross_icon from "./assets/cross.png";

let data = new Array(9).fill("");

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [vsAI, setVsAI] = useState(false);
  let titleRef = useRef(null);
  let boxRef1 = useRef(null);
  let boxRef2 = useRef(null);
  let boxRef3 = useRef(null);
  let boxRef4 = useRef(null);
  let boxRef5 = useRef(null);
  let boxRef6 = useRef(null);
  let boxRef7 = useRef(null);
  let boxRef8 = useRef(null);
  let boxRef9 = useRef(null);
  let boxArray = [
    boxRef1,
    boxRef2,
    boxRef3,
    boxRef4,
    boxRef5,
    boxRef6,
    boxRef7,
    boxRef8,
    boxRef9,
  ];

  const toggle = (e, num) => {
    if (lock || data[num] !== "" || (vsAI && count % 2 !== 0)) return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" className="image">`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src="${circle_icon}" className="image">`;
      data[num] = "o";
    }

    setCount((prev) => prev + 1);

    const gameOver = checkWin();

    if (vsAI && !gameOver) {
      setTimeout(() => {
        makeAIMove();
      }, 500);
    }
  };

  const checkWin = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of wins) {
      const [a, b, c] = combo;
      if (data[a] && data[a] === data[b] && data[b] === data[c]) {
        won(data[a], combo);
        return true;
      }
    }

    if (data.every((cell) => cell !== "")) {
      setLock(true);
      titleRef.current.innerHTML = "It's a <span>Draw!</span>";
      return true;
    }

    return false;
  };

  const won = (winner, winningCombination) => {
    setLock(true);
    winningCombination.forEach((index) => {
      boxArray[index].current.classList.add("winning-box");
    });

    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations <img src="${cross_icon}" /> You Won!`;
    } else {
      titleRef.current.innerHTML = `Congratulations <img src="${circle_icon}" /> You Won!`;
    }
  };

  const reset = () => {
    setLock(false);
    data = Array(9).fill("");
    titleRef.current.innerHTML = "Tic Tac Toe Game in <span>React</span>";
    boxArray.forEach((box) => {
      box.current.innerHTML = "";
      box.current.classList.remove("winning-box");
    });
  };

  const makeAIMove = () => {
    if (lock) return;

    const emptyIndices = data
      .map((cell, idx) => (cell === "" ? idx : null))
      .filter((val) => val !== null);

    if (emptyIndices.length === 0) return;

    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

    data[randomIndex] = "o";

    const box = boxArray[randomIndex].current;
    box.innerHTML = `<img src="${circle_icon}" />`;

    box.classList.add("ai-move");

    setTimeout(() => {
      box.classList.remove("ai-move");
    }, 2000);

    setCount((prev) => prev + 1);
    checkWin();
  };

  return (
    <div>
      <div className="container">
        <div className="title" ref={titleRef}>
          Tic Tac Toe Game in <span>React</span>
        </div>
        <div className="board">
          <div
            ref={boxRef1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            ref={boxRef2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            ref={boxRef3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
          <div
            ref={boxRef4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            ref={boxRef5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            ref={boxRef6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
          <div
            ref={boxRef7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            ref={boxRef8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            ref={boxRef9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
        <div className="btn">
          <button
            onClick={() => setVsAI(false)}
            disabled={!vsAI}
            className="pvp"
          >
            Player VS Player
          </button>
          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
          <button onClick={() => setVsAI(true)} disabled={vsAI} className="avp">
            AI VS Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
