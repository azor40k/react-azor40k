import '../Sass/components/AnswerButton.scss';
import { useState } from 'react';

const AnswerButton = ({ color, answer, setQuestionNb, changeToGray, setBaseColors }) => {

  const submitAnswer = () => {
        const targetAnswer = answer[1]
        changeToGray();
        setTimeout(() => {
            setQuestionNb(prev => prev + 1 );
            setBaseColors(["red", "blue", "orange", "green"]);  
        }, 2000)         
  }
  return (
        <button className={ `AnswerButton ${color}`} onClick={submitAnswer}>{answer[0]}</button>
)};

export default AnswerButton;