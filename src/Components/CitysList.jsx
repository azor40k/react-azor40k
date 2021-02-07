import City from './City';
import '../Sass/components/CitysList.scss';

const CitysList = () => {

    const citysList = ['paris', 'port-louis', 'new-york']

    return (
        <div className="citysList">
            {citysList.map((city, index) => <City cityName={city} key={index + city}/>)}
        </div>
    );
};

export default CitysList;