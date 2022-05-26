import React from 'react'
import Car from './Cars.js'

import {useState} from 'react';

const Cars = () => {

    // state to hold list of cars from props
    const [allCars, setAllCars] = useState([]);

    return (
        <>
            List of Cars
        </>
    )

}

export default Cars
