import { BrowserRouter,Route,Routes } from 'react-router-dom'

import React from 'react'
import Layout from './Layout'
import Home from './components/Home'
import Mattresses from './components/Mattresses'
import Sheets from './components/Sheets'
import Mycart from './components/Mycart'
import Contact from './components/Contact'
import "./css/style.css"
import AdminUser from './components/AdminUser'
import Dashboard from './components/Dashboard'
import CheckOut from './components/CheckOut'
import UploadProduct from './components/UploadProduct'
import Login from './components/Login'
import Registration from './components/Registration'
import About from './components/About'
import Displayproduct from './components/Displayproduct'
import Pillows from './components/Pillows'
import Success from './components/Success'
import Cancel from './components/Cancel'


const App = () => {
  return (
    <>

 <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='mattresses' element={<Mattresses/>}/>
          <Route path='pillow' element={<Pillows/>}/>
          <Route path='sheets' element={<Sheets/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='mycart' element={<Mycart/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='account' element={<AdminUser/>}/>
          <Route path="checkout" element={<CheckOut/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>


          <Route path="registration" element={<Registration/>}/>
          </Route>

    <Route path='dashboard' element={<Dashboard/>}>
    <Route path="uploadproduct" element={<UploadProduct/>}/>
    <Route path="displayproduct" element={<Displayproduct/>}/>
    </Route>
    
    </Routes>
    </BrowserRouter> 
      
    </>
  )
}

export default App
