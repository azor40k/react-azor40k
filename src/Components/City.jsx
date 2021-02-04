import useCityTemperature from '../customHooks/useCityTemperature';

const City = ({ cityName }) => {

    const { temp, ville } = useCityTemperature(cityName)

    return (
        <div>
            <h1>{ville}</h1>
            <h2>{temp} °C</h2>
        </div>
    );
};

export default City;