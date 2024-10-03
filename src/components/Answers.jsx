import React,{useRef} from 'react'
const Answers = ({answers,selectedAnswer,answerState,onSelect}) => {
    const shuffledAnswers=useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(()=>Math.random()-0.5);
     }
  return (
    <ul id="answers">
    {shuffledAnswers.current.map((answer) =>{ 
      const isSelected = selectedAnswer === answer;
      let cssClassName = '';
      if(answerState==='answered' &&isSelected ){
        cssClassName ='selected';
      }
      if((answerState==='correct' || answerState==='wrong' )&& isSelected){
        cssClassName =answerState;
      }
      return (
      <li key={answer} className="answer">
        <button  className={cssClassName}onClick={() => onSelect(answer)} disabled={answerState !==""}>{answer}</button>
      </li>
    )})}
  </ul>
  )
}

export default Answers