import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';

// import components for list of cars and individual cars
import Cars from './components/Cars.js';
import Car from './components/Car.js';


const App = () => {

    // state for car list from API call
    const [carList, setCarList] = useState([]);

    // states for new car info
    const [showNewCarForm, setShowNewCarForm] = useState(false);
    const [newMake, setNewMake] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newYear, setNewYear] = useState();
    const [newColor, setNewColor] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newWeekendCar, setNewWeekendCar] = useState(false);

    // get request api for cars on page load
    useEffect(() => {
        axios.get(`http://localhost:3000/cars`)
            .then((response) => {
                // console.log(response.data);
                setCarList(response.data);
            });
    });

    const renderCarList = () => {
        return <Cars cars={carList}/>
    }

    const toggleShowNewCarForm = () => {
        setShowNewCarForm(!showNewCarForm);
        console.log(showNewCarForm);
    }
    const renderNewCarForm = () => {
        return (
            <>
                <form onSubmit={handleNewCarSubmit}>
                    Make: <input type="text" value={newMake} onChange={handleNewMakeChange}/>
                    Model:
                    Year:
                    Image:
                    Color:
                    Weekend :
                </form>
                <button onClick={toggleShowNewCarForm}>Cancel</button>
            </>
        )
    }
    const handleNewMakeChange = (event) => {
        setNewMake(event.target.value);
    }
    const handleNewModelChange = (event) => {
        setNewModel(event.target.value);
    }
    const handleNewYearChange = (event) => {
        setNewYear(event.target.value);
    }
    const handleNewImageChange = (event) => {
        setNewImage(event.target.value);
    }
    const handleNewColorChange = (event) => {
        setNewColor(event.target.value);
    }
    const handleNewCarSubmit = () => {

    }

    return (
        <>
            <h1>Hello!</h1>
            <div>
                {showNewCarForm ?
                    renderNewCarForm()
                    :
                    <button onClick={(event) => {toggleShowNewCarForm()}}>Create New Car</button>
                }
            </div>
            <>{renderCarList()}</>
        </>
    )
}

export default App;
