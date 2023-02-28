import "./MostrarMensaje.css";

export default function MostrarMensaje({ number, secretNumber, score }) {
  if (secretNumber === number) {
    return <p className="message">Correct Number!</p>;
  } else if (score === 0) {
    return <p className="message">You lose!</p>;
  } else if (number === "") {
    return <p className="message">Start guessing...</p>;
  } else if (number > secretNumber) {
    return <p className="message">Too high!</p>;
  } else if (number < secretNumber) {
    return <p className="message">Too low!</p>;
  }
}
