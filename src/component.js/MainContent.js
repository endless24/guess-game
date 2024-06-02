import React, { useState } from "react";

function MainContent({ setCorrectNum, setBgColor, bgColor }) {
  const [guessNumber, setGuessNumber] = useState("");

  const [message, setMessage] = useState("");

  const [score, setScore] = useState(20);

  const [highscore, setHighScore] = useState(0);

  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  // console.log(secretNumber);

  const handleCheck = () => {
    if (!guessNumber) {
      setMessage("⛔️ No number");
    } else if (Number(guessNumber) === secretNumber) {
      setCorrectNum(secretNumber);
      setBgColor(!bgColor);
      setMessage("🎉 Correct - Number");

      if (score > highscore) {
        setHighScore(score);
      }
    } else if (guessNumber !== secretNumber) {
      if (score > 1) {
        setScore(score - 1);

        setMessage(
          guessNumber > secretNumber ? "📈 Too hight!" : "📉 Too low!"
        );
      } else {
        setMessage("🤯 You lost the game!");
      }
    }

    setGuessNumber("");
  };

  const handleRest = () => {
    setScore(20);
    setMessage("");
    setGuessNumber("");
    setCorrectNum("");
    setBgColor(false);
  };

  return (
    <main>
      <section className="left">
        <input
          type="number"
          className="guess"
          value={guessNumber}
          onChange={(e) => setGuessNumber(e.target.value)}
        />
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>
      <section className="right">
        <p className="message">
          {!message ? "Start guessing..." : `${message}`}
        </p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
      <button className="btn again" onClick={handleRest}>
        Again!
      </button>
    </main>
  );
}

export default MainContent;
