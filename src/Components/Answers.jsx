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
           {baseColors.map((v, index) => (
                <AnswerButton 
                    color={baseColors[index]} 
                    answer={randomizer[index]} 
                    setQuestionNb={setQuestionNb} 
                    changeToGray={changeToGray} 
                    setBaseColors={setBaseColors} 
                    setScore={setScore} 
                    setQuestionIncrement={setQuestionIncrement} 
                    disableButton={disableButton} 
                    setDisableButton={setDisableButton} 
                    setBackgroundColor={setBackgroundColor}
                />
            ))}
        </section>
)};

export default Answers;