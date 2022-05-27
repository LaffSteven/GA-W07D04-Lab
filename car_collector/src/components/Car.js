import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import './css/car.css'

const Car = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);
    const [editCar, setEditCar] = useState({});
    const [newMake, setNewMake] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newYear, setNewYear] = useState();
    const [newColor, setNewColor] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newWeekendCar, setNewWeekendCar] = useState(false);

    // state to determine if the edit form should be visible
    const toggleShowEditForm = (event) => {
        setShowEditForm(!showEditForm);
    }

    const assignEditCar = (car) => {
        setEditCar(car);
        setNewMake(car.make)
        setNewModel(car.model)
        setNewYear(car.year)
        setNewImage(car.image)
        setNewColor(car.color)
        toggleShowEditForm();
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Editing: ${newMake} ${newModel}`);
        axios.put(`http://localhost:3000/cars/${editCar._id}`, {
            make : newMake,
            model : newModel,
            year : newYear,
            image : newImage,
            color : newColor
        }).then(() => {
            renderCar()
            setShowEditForm(false)
            })
    }

    const renderEditForm = () => {
        return (
            <form onSubmit={handleEditFormSubmit}>
                Make <input type="text" value={newMake} onChange={handleNewMakeChange}/> <br/>
                Model: <input type="text" value={newModel} onChange={handleNewModelChange}/> <br/>
                Year: <input type="number" value={newYear} onChange={handleNewYearChange}/> <br/>
                Image: <input type="url" value={newImage} onChange={handleNewImageChange}/> <br/>
                Color: <input type="text" value={newColor} onChange={handleNewColorChange}/> <br/>
                <input type="submit" value="Save Changes"/>
                <button onClick={toggleShowEditForm}>Cancel</button>
                <button onClick={(event) => {handleDelete()}}>DELETE</button>
            </form>
        )
    }

    const handleCancelEdit = () => {
        setEditCar({});
        setNewMake("")
        setNewModel("")
        setNewYear(null)
        setNewImage("")
        setNewColor("")
        toggleShowEditForm();
    }

    // functions to handle the change in state of the edit forms
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

    const handleDelete = (car) => {
        console.log(`Deleting: ${car.make} ${car.model}`);
        axios.delete(`http://localhost:300/cars/${car._id}`)
            .then(() => {
                axios.get()
            })
    }

    const renderCar = () => {
        return (
            <>
                <h2 className="car-header">{props.car.make} {props.car.model}</h2>
                <div className="car-info">
                    <img src={props.car.image}/>
                    <div>
                        <p><strong>Year:</strong> {props.car.year}</p>
                    </div>
                    <div>
                        <p><strong>Color:</strong> {props.car.color}</p>
                    </div>
                    <div>
                        <p><strong>Weekend Fun:</strong> {`${props.car.weekendCar}`}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
        <div className="car-container" key={props.car._id}>
            {renderCar()}
            {props.car._id == editCar._id ?
                <>{showEditForm ? renderEditForm(props.car) : handleCancelEdit()}</>
                :
                <button onClick={(event) => {assignEditCar(props.car)}}>Edit</button>
            }
        </div>
        </>
    )
}
export default Car
