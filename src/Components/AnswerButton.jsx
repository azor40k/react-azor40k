import '../Sass/components/AnswerButton.scss';

const AnswerButton = ({ color, answer }) => (
        <button className={ `AnswerButton ${color}`}>{answer}</button>
);

export default AnswerButton;