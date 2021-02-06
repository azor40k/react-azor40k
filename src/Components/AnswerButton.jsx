import '../Sass/components/AnswerButton.scss';
import { useState } from 'react';

const AnswerButton = ({ color, answer, setQuestionNb, changeToGray, setBaseColors, setScore, setQuestionIncrement }) => {

  const submitAnswer = () => {
        const targetAnswer = answer[1]
        changeToGray();
        setTimeout(() => {
            setQuestionNb(prev => prev + 1 );
            setBaseColors(["red", "blue", "orange", "green"]);
            setQuestionIncrement(prevState => prevState + 1);  
        }, 2000)         
  }
  return (
        <button className={ `AnswerButton ${color}`} onClick={submitAnswer}>{answer[0]}</button>
)};

export default AnswerButton;