import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
import Fitness from '../Pages/Fitness'
import Technology from '../Pages/Technology'
import Hollywood from '../Pages/Hollywood'
import Food from '../Pages/Food'
import Home from '../Pages/Home'
import Navbar from './Navbar'
import Inside from '../Pages/Inside'

const Routing = () => {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Navbar />}/>
            <Route index element={ <Home />} />
            <Route path='/bollywood' element={ <Bollywood />} />
            <Route path='/technology' element={ <Technology />} />
            <Route path='/hollywood' element={ <Hollywood />} />
            <Route path='/fitness' element={ <Fitness />} />
            <Route path='/food' element={ <Food />} />
            <Route path='/spatile' element={<Inside />}/>
        </Routes>
    </div>
  )
}

export default Routing