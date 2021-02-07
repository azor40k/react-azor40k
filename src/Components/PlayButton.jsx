import '../Sass/components/PlayButton.scss';
import {Link} from "react-router-dom";

const PlayButton = ({message}) => (
    <Link to="/app">
        <button className="PlayButton">{message}</button>
    </Link>
);

export default PlayButton;