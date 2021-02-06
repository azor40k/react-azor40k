import '../Sass/components/AnswerButton.scss';
import { useState } from 'react';

const AnswerButton = ({ color, answer, setQuestionNb, changeToGray, setBaseColors, setScore, setQuestionIncrement }) => {

  const submitAnswer = () => {
      //   const targetAnswer = answer[1]
        answer[1] === true ? setScore(prevScore => prevScore + 1) : console.log('FAUX');
        
        changeToGray();
        setTimeout(() => {
            setQuestionNb(prev => prev + 1 );
            setBaseColors(["red", "blue", "orange", "green"]);
            setQuestionIncrement(prevState => prevState + 1);  
        }, 1000)         
  }
  return (
        <button className={ `AnswerButton ${color}`} onClick={submitAnswer}>{answer[0]}</button>
)};

export default AnswerButton;