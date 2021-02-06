import { useState } from 'react';
import '../Sass/components/Answers.scss';
import AnswerButton from './AnswerButton'

const Answers = ({ setQuestionNb, answers, setQuestionIncrement, setScore }) => {
    
    const [baseColors, setBaseColors] = useState(["red", "blue", "orange", "green"]);
    const { answer1, answer2, answer3, answer4 } = answers;
    const [disableButton, setDisableButton] = useState(false)
    
    const changeToGray = () => {
        setBaseColors(["grey", "grey", "grey", "grey"])
    };

    return (
        <section className="Answers">
            <AnswerButton color={baseColors[0]} answer={answer1} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton}/>
            <AnswerButton color={baseColors[1]} answer={answer2} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton}/>
            <AnswerButton color={baseColors[2]} answer={answer3} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton}/>
            <AnswerButton color={baseColors[3]} answer={answer4} setQuestionNb={setQuestionNb} changeToGray={changeToGray} setBaseColors={setBaseColors} setScore={setScore} setQuestionIncrement={setQuestionIncrement} disableButton={disableButton} setDisableButton={setDisableButton}/>
        </section>
)};

export default Answers;