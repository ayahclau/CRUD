import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import CreateUnit from './CreateUnit'
import Dashboard from './Dashboard'
import CreateContract from './CreateContract'
import Tenants from './Tenants'
import UpdateUser from './UpdateUser'
// import UpdateUser from './UpdateUser'
// import CreateRecord from './CreateRecord'
// import UpdateRecord from './UpdateRecord'
// import TenantRent from './CreateRent'
// import UpdateRent from './UpdateRent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='' element={<Users />}></Route>
            <Route path='/create' element={<CreateUser />}></Route>
            <Route path='/unit' element={<CreateUnit />}></Route>
            <Route path='/tenants' element={<Tenants />}></Route>
            <Route path='/contract/:id' element={<CreateContract />}></Route>
            <Route path='/update/:id' element={<UpdateUser />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
