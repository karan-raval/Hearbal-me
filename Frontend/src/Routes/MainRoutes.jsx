import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import AboutUs from '../About-US/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
const MainRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes