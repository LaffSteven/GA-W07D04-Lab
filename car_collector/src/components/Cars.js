import React from 'react'
import Car from './Cars.js'

import {useState} from 'react';

const Cars = (props) => {

    return (
        <>
            <h2>List of Cars</h2>
            <>
                {props.carList.map((car) => {
                    return (
                        <p>
                            {car.make}
                        </p>
                    )
                })}
            </>
        </>
    )

}

export default Cars
