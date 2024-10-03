import React from 'react'
import quizCompleted from '../assets/quiz-complete.png'
import QUESTIONS from '../../questions'
const Summary = ({UserAnswers}) => {
const SkippedAnswers=UserAnswers.filter(answer=>answer===null);
const correctAnswers=UserAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0])
const WrongAnswers=UserAnswers.filter((answer,index)=>answer!==null && answer!==QUESTIONS[index].answers[0])
const skippedAnswerShare=Math.round((SkippedAnswers.length/UserAnswers.length)*100);
const correctAnswerShare=Math.round((correctAnswers.length/UserAnswers.length)*100);
const wrongAnswersShare=100-skippedAnswerShare-correctAnswerShare;
  return (
    <div id="summary">
    <h2>Quiz Completed</h2>
    <img src={quizCompleted} alt="Quiz Completed" />
    <div id='summary-stats'>
      <p>
      <span className='number'>{skippedAnswerShare}%:</span>  
      <span className='text'>Skipped</span>  
      </p>
      <p>
      <span className='number'>{correctAnswerShare}%:</span>  
      <span className='text'>answered Correctly</span>  
      </p>
      <p>
      <span className='number'>{wrongAnswersShare}%:</span>  
      <span className='text'>Answered Incorrectly</span>  
      </p>
    </div>
    <ol>
      {UserAnswers.map((userAnswer,index) => {
        let cssClassName='user-answer';
        if(userAnswer===null){
          cssClassName+=' skipped';
        }else if(userAnswer===QUESTIONS[index].answers[0]){
          cssClassName+=' correct';
        }else{
          cssClassName+=' wrong';
        }
      return   <li key={index}>
        <h3>{index+1}</h3>
        <p className='question'>{QUESTIONS[index].text}</p>
        <p className={cssClassName}>{userAnswer?? "Skipped"}</p>
      </li>
      })}
      
    </ol>
  </div>
  )
}

export default Summary