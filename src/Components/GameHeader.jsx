import '../Sass/components/GameHeader.scss';
import Score from './Score'
import QuestionNumber from './QuestionNumber'

const GameHeader = () => (
        <section className="GameHeader">
                <QuestionNumber questionNumber="1"/>
                <Score />
        </section>
);

export default GameHeader;