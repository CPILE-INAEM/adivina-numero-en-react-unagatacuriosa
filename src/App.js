import { FloatingWhatsApp } from "react-floating-whatsapp";

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

  const handleReset = () => {
    setScore(20);
    setNumber("");
    setSecretNumber(randomNumber());
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log(`El numero secreto es ${secretNumber}`);
    console.log(`El numero introducido es ${number}`);
    if (number === secretNumber) {
      // mensaje ganado HECHO
      // mostar numero ganado HECHO
      // cambiar fondo

      // si el escore es mayor actualizar HECHO
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (score === 1) {
      setScore(score - 1);
      // perder HECHO
      // cambiar color
    } else if (number !== "") {
      console.log("Entra");
      setScore(score - 1);
      // mensaje es mas bajo HECHO
      // disminuir el score
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  let statusBack;
  if (secretNumber === number) {
    statusBack = "win";
  } else if (score === 0) {
    statusBack = "lose";
  } else {
    statusBack = "playing";
  }

  return (
    <div className={statusBack}>
      <FloatingWhatsApp />
      {console.log("Renderizando APP")}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleReset}>
          Again!
        </button>
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
