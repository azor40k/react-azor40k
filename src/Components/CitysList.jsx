import City from './City';
import '../Sass/components/CitysList.scss';

const CitysList = () => {

    const citysList = ['paris', 'london', 'tokyo']

    return (
        <div className="citysList">
            {citysList.map((city, index) => <City cityName={city} key={index + city}/>)}
        </div>
    );
};

export default CitysList;