import "./App.css";

import { useState, useRef, useEffect } from "react";

import MostarMensaje from "./MostrarMensaje.js";

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

let number = "";

function App() {
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());

  const inputRef = useRef(null);

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value));
  };

  useEffect(() => {
    console.log(`El numero secreto es ${secretNumber}`);
    console.log(`El numero introducido es ${number}`);
    if (number === secretNumber) {
      //mensaje ganado HECHO
      // mostar numero ganado HECHO
    } else if (score === 1) {
      setScore(score - 1);
      // perder
      // cambiar color
    } else {
      console.log("Entra");
      //mensaje es mas alto
      // disminuir el score
    }
  }, [number]);

  return (
    <div>
      {console.log("Renderizando APP")}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <MostarMensaje
            score={score}
            number={number}
            secretNumber={secretNumber}
          />
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
