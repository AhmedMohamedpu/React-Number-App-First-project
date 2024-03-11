import { useState } from "react";
import "./App.css";

function NumberApp() {
  const [Number, SetNumber] = useState(0);
  function Increse() {
    SetNumber(Number + 1);
  }
  function Decrese() {
    SetNumber(Number - 1);
  }

  return (
    <>
      <div className="contain">
        <button onClick={Increse} className="btn">
          Increse
        </button>
        <h1 className="num">{Number}</h1>
        <button onClick={Decrese} className="btn">
          Decrese
        </button>
      </div>
    </>
  );
}

export default NumberApp;
