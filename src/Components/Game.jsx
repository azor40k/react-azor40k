import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'
import astronomie from '../Questions/astronomieQuizz.json';
import { useState } from 'react';

const Game = () => {

    const [astronomieQuizz] = useState(astronomie)
    const [questionNb, setQuestionNb] = useState(0);

    return (
        <section>
            <GameHeader />
            <Question question={astronomieQuizz[questionNb].question}/>
            <Answers setQuestionNb={setQuestionNb} answers={astronomieQuizz[questionNb]}/>
        </section>
)}

export default Game;