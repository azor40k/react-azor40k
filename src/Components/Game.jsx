import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'
import astronomie from '../Questions/astronomieQuizz.json';
import { useState } from 'react';

const Game = () => {

    const [astronomieQuizz, setAstronomieQuizz] = useState(astronomie)
    const [questionNb, setQuestionNb] = useState(0);

    console.log(astronomie)

    return (
        <section>
            <GameHeader />
            {/* <Question question="Quel est la taille de Michael Jordan?"/>
            <Answers /> */}
            <Question question={astronomieQuizz[questionNb].question}/>
            <Answers setQuestionNb={setQuestionNb} answers={astronomieQuizz[questionNb]}/>
        </section>
)}

export default Game;