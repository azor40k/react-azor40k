import GameHeader from './GameHeader'
import Question from './Question'
import Answers from './Answers'

const Game = () => (
    <section>
        <GameHeader />
        <Question question="Quel est la taille de Michael Jordan?"/>
        <Answers />
    </section>
)

export default Game;