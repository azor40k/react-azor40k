import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'
import astronomie from '../Questions/astronomieQuizz.json';
import { useState } from 'react';
import '../Sass/components/Game.scss';
import Recap from './Recap';

const Game = () => {

    const [astronomieQuizz] = useState(astronomie)
    const [questionNb, setQuestionNb] = useState(0);

    console.log('NUMERO QUESTION :', questionNb)
//9
    const [score, setScore] = useState(0);
    const [questionIncrement, setQuestionIncrement] = useState(1);
    const [backgroundColor, setBackgroundColor] = useState('default');


    return (
        <section className={`Game ${backgroundColor}`}> 
            {questionIncrement !== 11 ? (
            <>
            <GameHeader score={score} questionIncrement={questionIncrement}/>
            <Question question={astronomieQuizz[questionNb].question}/>
            <Answers setQuestionNb={setQuestionNb} answers={astronomieQuizz[questionNb]} setQuestionIncrement={setQuestionIncrement} setScore={setScore} setBackgroundColor={setBackgroundColor}/>   
            </>) : <Recap score={score}/>}
        </section>
)}

export default Game;