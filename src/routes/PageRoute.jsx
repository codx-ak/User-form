import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Loader from '../components/Loader'
import PageNotFound from '../pages/PageNotFound'

const CreateUser=lazy(()=>import("../pages/AddUser"))
const UpdateUser=lazy(()=>import("../pages/UpdateUser"))

const PageRoute = () => {
  return (
    <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='add-user' element={<CreateUser/>}/>
            <Route path='update-user/:id' element={<UpdateUser/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </Suspense>
  )
}

export default PageRoute