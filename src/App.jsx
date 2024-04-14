import React from 'react'
// import Navbar from './Components/Navbar'
import HomeLiving from './Components/HomeLiving'
import Men from './Components/Men'
import Women from './Components/Women'
import Beauty from './Components/Beauty'
import Fashion from './Components/Fashion'
import Kids from './Components/Kids'
import Navbar from './Components/Navbar'
import { Navbarlinks } from './Navlinks'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='bg-gray-100'>
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