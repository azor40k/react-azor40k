import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'
import astronomie from '../Questions/astronomieQuizz.json';
import { useState } from 'react';
import '../Sass/components/Game.scss';

const Game = () => {

    const [astronomieQuizz] = useState(astronomie)
    const [questionNb, setQuestionNb] = useState(0);

    const [score, setScore] = useState(0);
    const [questionIncrement, setQuestionIncrement] = useState(1);
    const [backgroundColor, setBackgroundColor] = useState('default');


    return (
        <section className={`Game ${backgroundColor}`}>
            <GameHeader score={score} questionIncrement={questionIncrement}/>
            <Question question={astronomieQuizz[questionNb].question}/>
            <Answers setQuestionNb={setQuestionNb} answers={astronomieQuizz[questionNb]} setQuestionIncrement={setQuestionIncrement} setScore={setScore} setBackgroundColor={setBackgroundColor}/>
        </section>
)}

export default Game;