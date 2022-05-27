import React from 'react'
import Car from './Car.js'
import './css/car.css'

import {useState} from 'react';

const Cars = (props) => {

    //
    const renderCar = (car) => {
        return (
            <div key={car._id}>
                <Car car={car}/>
            </div>
        )
    }

    return (
        <>
            <h2>List of Cars</h2>
            <>
                {props.cars.map((car) => {
                    return (
                        renderCar(car)
                    )
                })}
            </>
        </>
    )

}

export default Cars
