import React, { useState, useEffect } from 'react';
import City from './City';
import useCityTemperature from '../customHooks/useCityTemperature';

const CityList = () => {

    const { temp, ville } = useCityTemperature('paris')

    console.log('weather yeye :', temp, ville);

    return (
        <div>
            <h2>CC</h2>
        </div>
    );
};

export default CityList;