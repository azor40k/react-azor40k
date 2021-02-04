import '../Sass/components/QuizzButton.scss';

const QuizzButton = ({ title, color }) => (
    <div className={`quizzButton ${color}`}>
        <h1 className="quizzButton-title">{title}</h1>
    </div>
);

export default QuizzButton;