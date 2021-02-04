import '../Sass/components/PlayButton.scss';
import { Link } from "react-router-dom";

const PlayButton = () => (
    <Link to="/app">
        <button className="PlayButton">Jouer</button>
    </Link>
);

export default PlayButton;