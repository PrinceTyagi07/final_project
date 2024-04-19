import React from 'react'
// import Navbar from './Components/Navbar'
import HomeLiving from './Pages/HomeLiving'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Beauty from './Pages/Beauty'
import Fashion from './Pages/Fashion'
import Kids from './Pages/Kids'
import Navbar from './Components/Navbar'
import { Navbarlinks } from './Navlinks'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=' '>
      <Navbar Navbarlinks={Navbarlinks} />
      
      <Routes>
        <Route path="/" element={<HomeLiving />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
    </div>
  )
}

export default App