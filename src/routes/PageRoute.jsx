import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const CreateUser=lazy(()=>import("../pages/AddUser"))
const UpdateUser=lazy(()=>import("../pages/UpdateUser"))

const PageRoute = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='add-user' element={<CreateUser/>}/>
            <Route path='update-user/:id' element={<UpdateUser/>}/>
            <Route path='delete-user/:id' element={<UpdateUser/>}/>
            <Route path='*' element={<div>404 Page</div>}/>
        </Routes>
    </Suspense>
  )
}

export default PageRoute