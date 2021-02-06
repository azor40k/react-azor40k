import '../Sass/components/GameHeader.scss';
import Score from './Score'
import QuestionNumber from './QuestionNumber'

const GameHeader = ({ score, questionIncrement }) => (
        <section className="GameHeader">
                <QuestionNumber questionNumber={questionIncrement}/>
                <Score score={score}/>
        </section>
);

export default GameHeader;