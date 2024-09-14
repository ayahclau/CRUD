import React, { useState } from "react";
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import "./CreateUnit.css";

function CreateUnit () {
    const [unitNumber, setUnitNumber] = useState()
    const [unitType, setUnitType] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUnit", {unitNumber, unitType})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='unit-container'>
            <div className='unit-content'>
                <form onSubmit={Submit}>
                    <h2>New Apartment Unit</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Unit Number</label>
                        <input type="text" placeholder='Enter Unit Number' className='form-control'
                        onChange={(e) => setUnitNumber(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Unit Type</label>
                        <select id="unitType" className='form-control' onChange={(e) => setUnitType(e.target.value)}>
                            <option value="">Select Type</option>
                            <option value="UpNDown">Up & Down</option>
                            <option value="StudioType">Studio-type</option>
                        </select>
                    </div>
                    <button className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUnit;