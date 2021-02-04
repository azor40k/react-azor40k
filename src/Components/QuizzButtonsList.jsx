import '../Sass/components/QuizzButtonsList.scss';
import QuizzButton from './QuizzButton';

const QuizzButtonsList = () => (
    <div className="quizzButtonsList">
       <QuizzButton title="Basket" color="red"/>
       <QuizzButton title="Manga" color="blue"/>
       <QuizzButton title="Sport" color="orange"/>
       <QuizzButton title="Astronomie" color="green"/>
    </div>
);

export default QuizzButtonsList;