import React, { useState } from "react";
import "./Quiz.css";
import Questions from "./Questions.js";

export default function Quiz() {
  const [started, setStarted] = useState(false);

  function startQuiz(event) {
    event.preventDefault();
    setStarted(true);
  }

  if (started) {
    return <Questions />;
  } else {
    return (
      <div className="Quiz">
        <div className="quiz-box">
          <h1>Are you REALLY a fun of Friends?</h1>
          <h2>Find out by doing this quiz!</h2>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      </div>
    );
  }
}
