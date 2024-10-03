import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizCompleted from "../assets/quiz-complete.png";
import Question from "./Question";

const Quiz = () => {
  const [UserAnswers, setUserAnswers] = useState([]);
  const ActiveQuestionIndex =UserAnswers.length 

  const handleAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAnswer(null);
  }, [handleAnswer]);

  const quizIsOver = ActiveQuestionIndex === QUESTIONS.length;

  if (quizIsOver) {
    return (
      <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={quizCompleted} alt="Quiz Completed" />
        <ul>
          {QUESTIONS.map((question, index) => (
            <li key={question.id}>
              {question.text} - {UserAnswers[index] !== undefined ? UserAnswers[index] : "Skipped"}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        index={ActiveQuestionIndex}
        key={ActiveQuestionIndex} 
        onSelectAnswer={handleAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
