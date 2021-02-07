import '../Sass/components/Recap.scss';
import PlayButton from './PlayButton';

const Recap = ({ score }) => {

    return (
        <>
            <h1 className="titre-recap">Votre score est de <span>{score}</span> points !</h1>
            <PlayButton message={"Rejouer"}/>
        </>
    );
};

export default Recap;
