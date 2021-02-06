import { useState } from 'react';
import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'
import '../Sass/components/Game.scss';
import Recap from './Recap';
import astronomie from '../Questions/astronomieQuizz.json';
import basketball from '../Questions/basketballQuizz.json';
import manga from '../Questions/mangaQuizz.json';
import devweb from '../Questions/devwebQuizz.json';

const Game = ({ type }) => {
        const selectedQuizz = type === 'basketball' ? basketball : type === 'astronomie' ? astronomie : type === 'manga' ? manga : devweb;
        const [quizz] = useState(selectedQuizz)
        const [questionNb, setQuestionNb] = useState(0);
  
    const [score, setScore] = useState(0);
    const [questionIncrement, setQuestionIncrement] = useState(1);
    const [backgroundColor, setBackgroundColor] = useState('default');


    return (
        <section className={`Game ${backgroundColor}`}> 
            {questionIncrement !== 11 ? (
            <>
            <GameHeader score={score} questionIncrement={questionIncrement}/>
            <Question question={quizz[questionNb].question}/>
            <Answers setQuestionNb={setQuestionNb} answers={quizz[questionNb]} setQuestionIncrement={setQuestionIncrement} setScore={setScore} setBackgroundColor={setBackgroundColor}/>   
            </>) : <Recap score={score}/>}
        </section>
)}

export default Game;