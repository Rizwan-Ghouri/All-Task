import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from '../../layouts/header'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Contect from '../../pages/contect'
import Calculator from '../../pages/Calculator'

function Approuter() {
  return (
    <div>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/'  element ={<Home />} />
                <Route path='/about'  element ={<About />} />
                <Route path='/contect'  element ={<Contect />} />
                <Route path='/calculator'  element ={<Calculator />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Approuter