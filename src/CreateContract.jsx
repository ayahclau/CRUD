import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./CreateContract.css";

function CreateContract () {
    const {id} = useParams()
    const [unit, setUnit] = useState({})
    const [tenants, setTenants] = useState([])
    const [selectedTenant, setSelectedTenant] = useState("")
    const [rentStart, setRentStart] = useState(new Date())
    const [rentEnd, setRentEnd] = useState(new Date())
    const [monthlyRent, setMonthlyRent] = useState()
    const [securityDeposit, setSecurityDeposit] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`http://localhost:3001/getUnit/${id}`)
        .then(result => {
            setUnit(result.data)
        })
        .catch(err => console.log(err))

        axios.get(`http://localhost:3001/users`)
        .then(result => {
            setTenants(result.data)
        })
        .catch(err => console.log(err))
    }, [id])

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createContract", {unit: id, tenant: selectedTenant, rentStart, rentEnd, monthlyRent, securityDeposit})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='contract-container'>
            <div className='contract-content'>
                <form onSubmit={Submit}>
                    <h2>Unit {unit.unitNumber}</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Tenant</label>
                        <select id="tenant" className='form-control' onChange={(e) => setSelectedTenant(e.target.value)}>
                            <option value="">Select Tenant</option>
                            {tenants.map((tenant) => (
                                <option key={tenant._id} value={tenant._id}>
                                    {tenant.lastName}{", "}{tenant.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rent Start Date</label>
                        <input type="date" className='form-control'
                        value={rentStart} onChange={(e) => setRentStart(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rent End Date</label>
                        <input type="date" className='form-control'
                        value={rentEnd} onChange={(e) => setRentEnd(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Monthly Rent</label>
                        <input type="text" placeholder='Enter Amount' className='form-control'
                        onChange={(e) => setMonthlyRent(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Security Deposit</label>
                        <input type="text" placeholder='Enter Amount' className='form-control'
                        onChange={(e) => setSecurityDeposit(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateContract;