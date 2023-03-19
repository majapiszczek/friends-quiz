import React, { useState } from "react";
import "./Questions.css";

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What was the name of Ross's monkey?",
      answers: [
        { answer: "Martin", isCorrect: false },
        { answer: "Marshall", isCorrect: false },
        { answer: "Marcel", isCorrect: true },
        { answer: "Mike", isCorrect: false },
      ],
    },
    {
      question: "How many babies did Phoebe have?",
      answers: [
        { answer: "1", isCorrect: false },
        { answer: "2", isCorrect: false },
        { answer: "3", isCorrect: true },
        { answer: "4", isCorrect: false },
      ],
    },
    {
      question: "Who won the apartment in the bet episode?",
      answers: [
        { answer: "Ross & Joey", isCorrect: false },
        { answer: "Monica & Rachel", isCorrect: false },
        { answer: "Phoebe & Monica", isCorrect: false },
        { answer: "Joey & Chandler", isCorrect: true },
      ],
    },
    {
      question: "Who was Monica's first kiss?",
      answers: [
        { answer: "Ross", isCorrect: true },
        { answer: "Joey", isCorrect: false },
        { answer: "Richard", isCorrect: false },
        { answer: "Chandler", isCorrect: false },
      ],
    },
    {
      question: "Where was Ross and Emily's wedding?",
      answers: [
        { answer: "Manchaster", isCorrect: false },
        { answer: "New York", isCorrect: false },
        { answer: "London", isCorrect: true },
        { answer: "Chicago", isCorrect: false },
      ],
    },
    {
      question: "Who starred in The One with the Rumor?",
      answers: [
        { answer: "George Clooney", isCorrect: false },
        { answer: "Brad Pitt", isCorrect: true },
        { answer: "Johnny Depp", isCorrect: false },
        { answer: "Leonardo DiCaprio", isCorrect: false },
      ],
    },
    {
      question: "What colored sweater did Ross leave at Rachel's place?",
      answers: [
        { answer: "Blue", isCorrect: false },
        { answer: "Green", isCorrect: false },
        { answer: "Yellow", isCorrect: false },
        { answer: "Red", isCorrect: true },
      ],
    },
    {
      question: "Who had the third nipple?",
      answers: [
        { answer: "Joey", isCorrect: false },
        { answer: "Monica", isCorrect: false },
        { answer: "Chandler", isCorrect: true },
        { answer: "Ross", isCorrect: false },
      ],
    },
    {
      question: "What was Rachel's New Year resolution?",
      answers: [
        { answer: "To gossip less", isCorrect: true },
        { answer: "To workout more", isCorrect: false },
        { answer: "To get engaged", isCorrect: false },
        { answer: "To learn how to cook", isCorrect: false },
      ],
    },
    {
      question: "What was Monica dressed up as at the halloween costume party?",
      answers: [
        { answer: "Bunny", isCorrect: false },
        { answer: "Cat Woman", isCorrect: true },
        { answer: "Nurse", isCorrect: false },
        { answer: "Wonder Woman", isCorrect: false },
      ],
    },
  ];

  const startAgain = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setScore(0);
  };

  const showNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    if (score > 7) {
      return (
        <div className="Questions">
          <div className="quiz-box">
            <p className="score">
              You scored {score}/{questions.length}
            </p>
            <p>Wow! You really are a true fan of Friends!</p>
            <button onClick={startAgain}>Start again</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Questions">
          <div className="quiz-box">
            <p className="score">
              You scored {score}/{questions.length}
            </p>
            <p>It could've been better.. Go watch more episodes!</p>
            <button onClick={startAgain}>Start again</button>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="Questions">
        <div className="quiz-box">
          <h3>
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <p>{questions[currentQuestion].question}</p>
          <div className="answer-options">
            {questions[currentQuestion].answers.map((answerOption) => (
              <button onClick={() => showNextQuestion(answerOption.isCorrect)}>
                {answerOption.answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
