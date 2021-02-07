import '../Sass/components/QuizzButtonsList.scss';
import QuizzButton from './QuizzButton';

const QuizzButtonsList = () => {

    return (
        <div className="quizzButtonsList">
            <QuizzButton title="Basket" color="red" quizz={"basketball"}/>
            <QuizzButton title="Manga" color="blue" quizz={"manga"}/>
            <QuizzButton title="Developpement Web" color="orange" quizz={"devweb"}/>
            <QuizzButton title="Astronomie" color="green" quizz={"astronomie"}/>
        </div>
    );
};

export default QuizzButtonsList;