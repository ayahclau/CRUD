import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./CreateRent.css";

function CreateRent () {
    const {id} = useParams()
    const [tenant, setTenant] = useState({})
    const [paymentMethod, setPaymentMethod] = useState()
    const [date, setDate] = useState(new Date())
    const [balance, setBalance] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`http://localhost:3001/getUser/${id}`)
        .then(result => {
            setTenant(result.data)
        })
        .catch(err => console.log(err))
    }, [id])

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createRent", {tenant: id, paymentMethod, date, balance})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='rent-container'>
            <div className='rent-content'>s
                <form onSubmit={Submit}>
                    <h2>Tenant Rent Payment</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Payment Method</label>
                        <select id="paymentMethod" className='form-control' onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="">Select Payment Method</option>
                            <option value="Security Deposit">Security Deposit</option>
                            <option value="Cash">Cash</option>
                            <option value="Check">Check</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Date</label>
                        <input type="date" className='form-control'
                        value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Balance</label>
                        <input type="text" placeholder='Enter Balance' className='form-control'
                        onChange={(e) => setBalance(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRent;