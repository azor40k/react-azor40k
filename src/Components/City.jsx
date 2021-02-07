import useCityTemperature from '../customHooks/useCityTemperature';
import LazyLoading from './LazyLoading';

const City = ({cityName}) => {

    const {temp, ville} = useCityTemperature(cityName)

    const lazyLoading = temp && ville ? (
        <div>
            <h1>{ville}</h1>
            <h2>{temp} °C</h2>  
        </div>
    ) : <LazyLoading />

    return (
       <>
        {lazyLoading}
       </>
    );
};

export default City;