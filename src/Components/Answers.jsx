import { useState } from 'react';
import '../Sass/components/Answers.scss';
import AnswerButton from './AnswerButton'

const Answers = ({ setQuestionNb, answers, setQuestionIncrement, setScore, setBackgroundColor }) => {

    const [baseColors, setBaseColors] = useState(["red", "blue", "orange", "green"]);
    const [disableButton, setDisableButton] = useState(false)

    const randomizer = Object.values(answers).splice(2, 6);

    for(let i = randomizer.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = randomizer[i]
        randomizer[i] = randomizer[j]
        randomizer[j] = temp
      }

    const changeToGray = () => {
        setBaseColors(["grey", "grey", "grey", "grey"])
    };

    return (
        <section className="Answers">
            <AnswerButton color={baseColors[0]} answer={randomizer[0]} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton} setBackgroundColor={setBackgroundColor}/>
            <AnswerButton color={baseColors[1]} answer={randomizer[1]} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton} setBackgroundColor={setBackgroundColor}/>
            <AnswerButton color={baseColors[2]} answer={randomizer[2]} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton} setBackgroundColor={setBackgroundColor}/>
            <AnswerButton color={baseColors[3]} answer={randomizer[3]} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton} setBackgroundColor={setBackgroundColor}/>
        </section>
)};

export default Answers;