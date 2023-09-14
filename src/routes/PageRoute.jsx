import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const CreateUser=lazy(()=>import("../pages/AddUser"))
const UpdateUser=lazy(()=>import("../pages/UpdateUser"))
const ViewUser=lazy(()=>import("../pages/ViewUser"))
const PageRoute = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='add-user' element={<CreateUser/>}/>
            <Route path='update-user/:id' element={<UpdateUser/>}/>
            <Route path='view-user/:id' element={<ViewUser/>}/>
            <Route path='delete-user/:id' element={<ViewUser/>}/>
            <Route path='*' element={<div>404 Page</div>}/>
        </Routes>
    </Suspense>
  )
}

export default PageRoute