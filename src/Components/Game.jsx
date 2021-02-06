import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'
import astronomie from '../Questions/astronomieQuizz.json';
import { useState } from 'react';

const Game = () => {

    const [astronomieQuizz] = useState(astronomie)
    const [questionNb, setQuestionNb] = useState(0);

    const [score, setScore] = useState(0);
    const [questionIncrement, setQuestionIncrement] = useState(1);


    return (
        <section>
            <GameHeader score={score} questionIncrement={questionIncrement}/>
            <Question question={astronomieQuizz[questionNb].question}/>
            <Answers setQuestionNb={setQuestionNb} answers={astronomieQuizz[questionNb]} setQuestionIncrement={setQuestionIncrement} setScore={setScore}/>
        </section>
)}

export default Game;