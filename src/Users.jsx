import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";

function Users () {
    const [unit, setUnit] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/unit')
        .then(result => {
            setUnit(result.data);
        })
        .catch(err => console.log(err))
    }, [])

    const DeleteUnit = (id) => {
        axios.delete('http://localhost:3001/deleteUnit/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }

    return (
        <div class="user-container">
            <div class='user-content'>
                <Link to="/unit" className='btn btn-success'>New Unit</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Unit Number</th>
                            <th>Unit Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unit.map((u) => {
                            return <tr>
                                <td>{u.unitNumber}</td>
                                <td>{u.unitType}</td>
                                <td>
                                {/* <Link to={`/rentUpdate/${u._id}`} className='btn btn-success me-2'>Edit</Link> */}
                                <Link to={`/contract/${u._id}`} className='btn btn-success me-2'>Register</Link>
                                <button className='btn btn-danger me-2' onClick={() => DeleteUnit(u._id)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;