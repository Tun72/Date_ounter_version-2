import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("oct 11 2023");
  date.setDate(date.getDate() + count);

  function clear() {
    setCount(0);
    setStep(1);
  }

  function hasChange(e) {
    if (isNaN(e.target.value)) return;
    setCount(+e.target.value);
  }
  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />{" "}
        <span>{step}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <input type="text" value={count} onChange={hasChange} />
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>

      {count > 0 ? (
        <p>
          {count} day from Today is {date.toDateString()}
        </p>
      ) : count < 0 ? (
        <p>
          {" "}
          {count * -1} day ago was is {date.toDateString()}
        </p>
      ) : (
        <p>Today is {date.toDateString()}</p>
      )}
      {count !== 0 && step !== 1 ? (
        <button type="reset" onClick={clear}>
          {" "}
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}
