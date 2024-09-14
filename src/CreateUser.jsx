import React, { useState } from "react";
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import "./CreateUser.css";

function CreateUser () {
    // const [name, setName] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
    const [contactNumber, setContactNumber] = useState()
    const [currentAddress, setCurrentAddress] = useState()
    const [emergencyContact, setEmergencyContact] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {firstName, lastName, dateOfBirth, gender, email, contactNumber, currentAddress, emergencyContact})
        .then(result => {
            console.log(result)
            navigate('/tenants')
        })
        .catch(err => console.log(err))
    }

    return (
        <div class='user-container'>
            <div class='user-content'>
                <form onSubmit={Submit}>
                    <h2>Register Tenant</h2>
                    <div className='mb-2'>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter First Name' className='form-control'
                        onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter Last Name' className='form-control'
                        onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" className='form-control'
                        onChange={(e) => setDateOfBirth(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Gender</label>
                        <select id="gender" className='form-control' onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Contact Number</label>
                        <input type="text" placeholder='Enter Contact No' className='form-control'
                        onChange={(e) => setContactNumber(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Current Address</label>
                        <input type="text" placeholder='Enter Current Address' className='form-control'
                        onChange={(e) => setCurrentAddress(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Emergency Contact</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e) => setEmergencyName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Emergency Contact Number</label>
                        <input type="text" placeholder='Enter Contact Number' className='form-control'
                        onChange={(e) => setEmergencyNumber(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;