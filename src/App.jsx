import React, { useState } from 'react'
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
import Cart from './Pages/Cart'
import Like from './Pages/Like'

const App = () => {
  const [change, setChange] = useState(false);
  function changehandler() {
    setChange(false);
}
  return (
    <div  className=' '>
      <Navbar Navbarlinks={Navbarlinks} changes={change} setChanges={setChange} />
      <div >
      <Routes>
        <Route path="/" element={<HomeLiving setChanges={setChange}/>} />
        <Route path="/men" element={<Men setChanges={setChange} />} />
        <Route path="/women" element={<Women setChanges={setChange}/>} />
        <Route path="/kids" element={<Kids setChanges={setChange} />} />
        <Route path="/beauty" element={<Beauty setChanges={setChange} />} />
        <Route path="/fashion" element={<Fashion setChanges={setChange} />} />
        <Route path="/cart" element={<Cart setChanges={setChange} />} />
        <Route path="/like" element={<Like  setChanges={setChange}/>} />

      </Routes>
      </div>
      
    </div>
  )
}

export default App