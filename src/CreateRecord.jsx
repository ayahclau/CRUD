import React, { useState } from "react";
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

function CreateRecord () {
    const [date, setDate] = useState(new Date())
    const [description, setDescription] = useState()
    const [cost, setCost] = useState()
    const [amtPaid, setAmtPaid] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createRecord", {date, description, cost, amtPaid})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Maintenance Record</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Date</label>
                        <input type="date" className='form-control'
                        onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Enter Description' className='form-control'
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Cost</label>
                        <input type="text" placeholder='Enter Cost' className='form-control'
                        onChange={(e) => setCost(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Amount Paid</label>
                        <input type="text" placeholder='Enter Amount Paid' className='form-control'
                        onChange={(e) => setAmtPaid(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecord;