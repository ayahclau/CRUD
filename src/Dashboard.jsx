import React, { } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Dashboard.css";
import companylogo from "./images/csaresidences.png";


 
function Dashboard() {

    return (
        <div className="container-fluid">
            <div class="row">
                <div class="column">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                <Link to="/" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                                    <span className="ms-1 d-none d-sm-inline">Dashboard</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/tenants" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                                    <span className="ms-1 d-none d-sm-inline"> Tenant Information</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/history" className="nav-link px-0 align-middle text-white">
                                    <span className="ms-1 d-none d-sm-inline">Tenant History</span> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="head">
                    <div class='logo'>
                        <img src={companylogo} alt="Company Logo" />                     
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
 
export default Dashboard