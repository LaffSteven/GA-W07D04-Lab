import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';

// import components for list of cars and individual cars
import Cars from './components/Cars.js';
import Car from './components/Car.js';


const App = () => {

    // state for car list from API call
    const [carList, setCarList] = useState([]);

    // get request api for cars on page load
    useEffect(() => {
        axios.get(`http://localhost:3000/cars`)
            .then((response) => {
                // console.log(response.data);
                setCarList(response.data);
            });
    });

    return (
        <>
            <h1>Hello!</h1>
            <Cars cars={carList}/>
        </>
    )
}

export default App;
