import {useState, useEffect} from 'react';

const useCityTemperature = (city) => {

    const [temp, setTemp] = useState('');
    const [ville, setVille] = useState('');

    useEffect(() => {
        const key = 'FsM0ZjcMLVvkxENJKOREbGPw4XCtdIx2';

        const cityUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        const weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';

        const cityLowercase = city.toLowerCase()

        const cityQuery = `?apikey=${key}&q=${cityLowercase}`;
        fetch(cityUrl + cityQuery)
            .then(res => res.json())
            .then(city =>
                      fetch(`${weatherUrl}${city[0].Key}?apikey=${key}`)
                          .then(res => res.json())
                          .then(data =>
                                    setTemp(data[0].Temperature.Metric.Value),
                                setVille(city[0].EnglishName),
                          ),
            );
    });

    return {temp, ville};
};

export default useCityTemperature;