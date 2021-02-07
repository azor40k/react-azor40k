import '../Sass/components/QuizzButton.scss';
import { Link } from "react-router-dom";

const QuizzButton = ({ title, color, quizz }) => {

    return (
        <section>
            <Link to={`/app/quizz/${quizz}`}>
                <div className={`quizzButton ${color}`}>
                    <h1 className="quizzButton-title">{title}</h1>
                </div>
            </Link>
        </section>
    );
};

export default QuizzButton;