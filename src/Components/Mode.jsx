import QuizzButtonsList from "./QuizzButtonsList";
import '../Sass/components/Mode.scss';
import Return from './Return';

const Mode = () => {

    return (
        <section>
            <Return/>
            <h1 className="title-theme">Choisissez votre thème</h1>
            <QuizzButtonsList/>
        </section>
    )
}

export default Mode;
