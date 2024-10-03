import React, { useState, useCallback } from "react";
import QUESTIONS from "../../questions";
import Question from "./Question";
import Summary from "./Summary";
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
    <Summary UserAnswers={UserAnswers}/>
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
