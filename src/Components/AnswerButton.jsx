import '../Sass/components/AnswerButton.scss';

const AnswerButton = ({ color, answer, setQuestionNb }) => (
        <button className={ `AnswerButton ${color}`} onClick={() => setQuestionNb(prev => prev + 1 )}>{answer}</button>
);

export default AnswerButton;