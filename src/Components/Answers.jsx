import '../Sass/components/Answers.scss';
import AnswerButton from './AnswerButton'

const Answers = () => (
        <section className="Answers">
                <AnswerButton color="red" answer="Réponse X"/>
                <AnswerButton color="blue" answer="Réponse X"/>
                <AnswerButton color="orange" answer="Réponse X"/>
                <AnswerButton color="green" answer="Réponse X"/>
        </section>
);

export default Answers;