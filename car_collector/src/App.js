import './App.css';
import {useState, useEffect} from 'react';

// import components for list of cars and individual cars
import Cars from './components/Cars.js';
import Car from './components/Car.js';

const App = () => {

    // state for car list from API call
    const [carList, setCarList] = useState([]);


    return (
        <>
            <h1>Hello!</h1>
            <Cars/>
        </>
    )
}

export default App;
