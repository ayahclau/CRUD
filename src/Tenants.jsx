import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tenants.css";

function Tenants () {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/users')
        .then(result => {
            const formattedUsers = result.data.map(user => ({
                ...user,
                dateOfBirth: new Date(user.dateOfBirth).toLocaleDateString(undefined, {year:'numeric', month: 'long', day: 'numeric'})
            }));
            setUsers(formattedUsers);
        })
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }

    return (
        <div class="tenant-container">
            <div class='tenant-content'>
                <Link to="/create" className='btn btn-success'>Register</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Current Address</th>
                            <th>Emergency Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.lastName}{", "}{user.firstName}</td>
                                    <td>{user.dateOfBirth}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contactNumber}</td>
                                    <td>{user.currentAddress}</td>
                                    <td>{user.emergencyName}{"-"}{user.emergencyNumber}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Edit</Link>
                                        <button className='btn btn-danger me-2'
                                        onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tenants;
