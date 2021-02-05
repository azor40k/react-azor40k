import '../Sass/components/Answers.scss';
import AnswerButton from './AnswerButton'

const Answers = ({ setQuestionNb, answers }) => {

    const {answer1, answer2, answer3, answer4} = answers;

    return (
        <section className="Answers">
            <AnswerButton color="red" answer={answer1} setQuestionNb={setQuestionNb}/>
            <AnswerButton color="blue" answer={answer2} setQuestionNb={setQuestionNb}/>
            <AnswerButton color="orange" answer={answer3} setQuestionNb={setQuestionNb}/>
            <AnswerButton color="green" answer={answer4} setQuestionNb={setQuestionNb}/>
        </section>
)};

export default Answers;