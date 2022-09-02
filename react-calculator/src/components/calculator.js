import { useState } from "react";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["÷", "*", "+", "-", "."];

  function handleClick(value) {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1))) ||
      (value === "." && calc.split("").includes("."))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  function equals() {
    setCalc(eval(calc).toString());
    setResult("");
  }

  function deleteNum() {
    if (calc.length > 0) {
      setCalc(calc.slice(0, -1));
    }
  }

  function clear() {
    setCalc("");
    setResult("");
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result ? result : "0"}</div>
        <div className="calc">{calc || "0"}</div>
      </div>
      <button className="wide-button" onClick={clear}>
        AC
      </button>
      <button className="wide-button" onClick={deleteNum}>
        DEL
      </button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>1</button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>2</button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>3</button>
      <button className="op-button" onClick={() => handleClick("/")}>
        ÷
      </button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>4</button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>5</button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>6</button>
      <button
        className="op-button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        *
      </button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>7</button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>8</button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>9</button>
      <button
        className="op-button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        +
      </button>
      <button
        className="op-button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        .
      </button>
      <button onClick={(e) => handleClick(e.target.innerHTML)}>0</button>
      <button className="op-button" onClick={equals}>
        =
      </button>
      <button
        className="op-button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        -
      </button>
    </div>
  );
}
