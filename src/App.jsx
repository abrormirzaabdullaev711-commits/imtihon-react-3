import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Category1 from './Routes/Category1/Category1'
import Navbar from './Components/Navbar/Navbar'
import Footer1 from './Components/footer/Footer1'
import Category2 from './Routes/Category2/Category2'

const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category1/>}/>
        <Route path='/category2' element={<Category2/>}/>
      </Routes>
      <Footer1/>
    </div>
  )
}

export default App
